#import <Foundation/Foundation.h>
#import <Speech/Speech.h>
#import "RNSFSpeechRecognizerRequestAuthorization.h"

@implementation RNSFSpeechRecognizerRequestAuthorization

RCT_EXPORT_MODULE(AppleSFSpeechRecognizerRequestAuthorization)

RCT_EXPORT_METHOD(run:(RCTResponseSenderBlock)callback) {
  [SFSpeechRecognizer requestAuthorization:^(SFSpeechRecognizerAuthorizationStatus status) {
    callback(@[[NSNull null], @(status)]);
  }];
}

@end
