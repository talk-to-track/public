#import <AVFoundation/AVFoundation.h>
#import "RNAVAudioSessionRequestRecordPermission.h"

@implementation RNAVAudioSessionRequestRecordPermission

RCT_EXPORT_MODULE(AppleAVAudioSessionRequestRecordPermission)

RCT_EXPORT_METHOD(run:(RCTResponseSenderBlock)callback) {
  [[AVAudioSession sharedInstance] requestRecordPermission:^(BOOL permission) {
    callback(@[[NSNull null], @(permission)]);
  }];
}

@end
