#import <Foundation/Foundation.h>
#import <React/RCTConvert.h>
#import <Speech/Speech.h>
#import "RNSFSpeechRecognizerRecognitionTaskAudioBuffer.h"

@interface RNSFSpeechRecognizerRecognitionTaskAudioBuffer ()

@property (nonatomic, strong) NSMutableDictionary *audioEngines;
@property (nonatomic) BOOL skipError;
@property (nonatomic, strong) NSMutableDictionary *speechRecognitionRequests;
@property (nonatomic, strong) NSMutableDictionary *speechRecognitionTasks;

@end

@implementation RNSFSpeechRecognizerRecognitionTaskAudioBuffer

RCT_EXPORT_MODULE(AppleSFSpeechRecognizerRecognitionTaskAudioBuffer)

- (id)init {
  if (self = [super init]) {
    self.audioEngines = [[NSMutableDictionary alloc] init];
    self.speechRecognitionRequests = [[NSMutableDictionary alloc] init];
    self.speechRecognitionTasks = [[NSMutableDictionary alloc] init];
  }

  return self;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"taskError", @"taskResult"];
}

RCT_EXPORT_METHOD(start:(NSString *)id options:(NSDictionary *)options) {
  NSDictionary *optionsRecognizer = [RCTConvert NSDictionary:options[@"speechRecognizer"]];
  NSString *optionsRecognizerLocaleIdentifier = [RCTConvert NSString:optionsRecognizer[@"localeIdentifier"]];
  NSDictionary *optionsRequest = [RCTConvert NSDictionary:options[@"speechRecognitionRequest"]];
  NSArray *optionsRequestContextualStrings = [RCTConvert NSArray:optionsRequest[@"contextualStrings"]];
  NSString *optionsRequestInteractionIdentifier = [RCTConvert NSString:optionsRequest[@"interactionIdentifier"]];
  AVAudioEngine *audioEngine = [[AVAudioEngine alloc] init];
  AVAudioInputNode *audioInputNode = audioEngine.inputNode;
  AVAudioFormat *audioFormat = [audioInputNode outputFormatForBus:0];
  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
  SFSpeechAudioBufferRecognitionRequest *speechRecognitionRequest = [[SFSpeechAudioBufferRecognitionRequest alloc] init];
  SFSpeechRecognizer *speechRecognizer;
  NSError *error = nil;
  self.skipError = YES;

  if (optionsRecognizerLocaleIdentifier == nil) {
    speechRecognizer = [[SFSpeechRecognizer alloc] init];
  } else {
    NSLocale *speechRecognizerLocale = [[NSLocale alloc] initWithLocaleIdentifier:optionsRecognizerLocaleIdentifier];
    speechRecognizer = [[SFSpeechRecognizer alloc] initWithLocale:speechRecognizerLocale];
  }

  [audioSession setCategory:AVAudioSessionCategoryRecord error:&error];
  [audioSession setMode:AVAudioSessionModeMeasurement error:&error];
  [audioSession setActive:YES withOptions:AVAudioSessionSetActiveOptionNotifyOthersOnDeactivation error:&error];

  if (optionsRequest[@"audioSessionDataSourceID"] != [NSNull null]) {
    NSNumber *dataSourceID = [RCTConvert NSNumber:optionsRequest[@"audioSessionDataSourceID"]];

    for (AVAudioSessionDataSourceDescription *inputDataSource in audioSession.inputDataSources) {
      if (inputDataSource.dataSourceID == dataSourceID) {
        [audioSession setInputDataSource:inputDataSource error:&error];
        break;
      }
    }
  }

  speechRecognitionRequest.contextualStrings = optionsRequestContextualStrings;
  speechRecognitionRequest.interactionIdentifier = optionsRequestInteractionIdentifier;

  if (optionsRequest[@"shouldReportPartialResults"] != [NSNull null]) {
    BOOL shouldReportPartialResults = [RCTConvert BOOL:optionsRequest[@"shouldReportPartialResults"]];
    speechRecognitionRequest.shouldReportPartialResults = shouldReportPartialResults;
  }

  if (optionsRequest[@"taskHint"] != [NSNull null]) {
    NSInteger taskHint = [RCTConvert NSInteger:optionsRequest[@"taskHint"]];
    speechRecognitionRequest.taskHint = taskHint;
  }

  SFSpeechRecognitionTask *speechRecognitionTask = [speechRecognizer recognitionTaskWithRequest:speechRecognitionRequest resultHandler:^(SFSpeechRecognitionResult *speechRecognitionResult, NSError *speechRecognitionError) {
    if (speechRecognitionError && !self.skipError) {
      [self sendEventWithName:@"taskError" body:@{
        @"id": id,
        @"value": @{
          @"code": @(speechRecognitionError.code),
          @"debugDescription": speechRecognitionError.debugDescription,
          @"localizedDescription": speechRecognitionError.localizedDescription
        }
      }];

      [self stop:id];
      return;
    }

    self.skipError = NO;
    NSMutableArray *serializedTranscriptions = [[NSMutableArray alloc] init];

    for (SFTranscription *transcription in speechRecognitionResult.transcriptions) {
      NSDictionary *serializedTranscription;
      NSMutableArray *serializedTranscriptionSegments = [[NSMutableArray alloc] init];

      for (SFTranscriptionSegment *segment in transcription.segments) {
        [serializedTranscriptionSegments addObject:@{
          @"alternativeSubstrings": segment.alternativeSubstrings,
          @"confidence": @(segment.confidence),
          @"duration": @(segment.duration),
          @"substring": segment.substring,
          @"substringRange": @{
            @"length": @(segment.substringRange.length),
            @"location": @(segment.substringRange.location)
          },
          @"timestamp": @(segment.timestamp)
        }];
      }

      serializedTranscription = @{
        @"formattedString": transcription.formattedString,
        @"segments": serializedTranscriptionSegments
      };

      [serializedTranscriptions addObject:serializedTranscription];
    }

    NSDictionary *serializedSpeechRecognitionResult = @{
      @"bestTranscription": serializedTranscriptions.count > 0 ? serializedTranscriptions[0] : [NSNull null],
      @"isFinal": @(speechRecognitionResult.isFinal),
      @"transcriptions": serializedTranscriptions
    };

    [self sendEventWithName:@"taskResult" body:@{
      @"id": id,
      @"value": serializedSpeechRecognitionResult
    }];

    if (speechRecognitionResult.isFinal) {
      [self stop:id];
    }
  }];

  self.audioEngines[id] = audioEngine;
  self.speechRecognitionRequests[id] = speechRecognitionRequest;
  self.speechRecognitionTasks[id] = speechRecognitionTask;

  [audioInputNode installTapOnBus:0 bufferSize:1024 format:audioFormat block:^(AVAudioPCMBuffer *buffer, AVAudioTime *time) {
    [speechRecognitionRequest appendAudioPCMBuffer:buffer];
  }];

  [audioEngine prepare];
  [audioEngine startAndReturnError:&error];
}

- (void)stop:(NSString *)id {
  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
  AVAudioEngine *audioEngine = self.audioEngines[id];
  SFSpeechAudioBufferRecognitionRequest *speechRecognitionRequest = self.speechRecognitionRequests[id];

  [speechRecognitionRequest endAudio];
  [audioSession setActive:NO error:nil];

  if (audioEngine.isRunning) {
    [audioEngine stop];
    [audioEngine.inputNode removeTapOnBus:0];
  }

  [self.audioEngines removeObjectForKey:id];
  [self.speechRecognitionRequests removeObjectForKey:id];
  [self.speechRecognitionTasks removeObjectForKey:id];
}

RCT_EXPORT_METHOD(cancel:(NSString *)id callback:(RCTResponseSenderBlock)callback) {
  self.skipError = true;
  SFSpeechRecognitionTask *speechRecognitionTask = self.speechRecognitionTasks[id];
  [speechRecognitionTask cancel];
  callback(@[]);
}

RCT_EXPORT_METHOD(finish:(NSString *)id callback:(RCTResponseSenderBlock)callback) {
  self.skipError = true;
  SFSpeechRecognitionTask *speechRecognitionTask = self.speechRecognitionTasks[id];
  [speechRecognitionTask finish];
  callback(@[]);
}

@end
