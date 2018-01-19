#import <AVFoundation/AVFoundation.h>
#import "RNAVAudioSessionRecordPermission.h"

@implementation RNAVAudioSessionRecordPermission

RCT_EXPORT_MODULE(AppleAVAudioSessionRecordPermission)

RCT_EXPORT_METHOD(run:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], @([AVAudioSession sharedInstance].recordPermission)]);
}

@end
