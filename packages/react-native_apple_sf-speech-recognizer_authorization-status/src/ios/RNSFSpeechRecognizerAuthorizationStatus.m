#import <Foundation/Foundation.h>
#import <Speech/Speech.h>
#import "RNSFSpeechRecognizerAuthorizationStatus.h"

@implementation RNSFSpeechRecognizerAuthorizationStatus

RCT_EXPORT_MODULE(AppleSFSpeechRecognizerAuthorizationStatus)

RCT_EXPORT_METHOD(run:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], @([SFSpeechRecognizer authorizationStatus])]);
}

@end
