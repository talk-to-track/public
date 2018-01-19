#import <AVFoundation/AVFoundation.h>
#import "RNAVAudioSessionInputDataSourcesGet.h"

@implementation RNAVAudioSessionInputDataSourcesGet

RCT_EXPORT_MODULE(AppleAVAudioSessionInputDataSourcesGet)

RCT_EXPORT_METHOD(run:(RCTResponseSenderBlock)callback) {
  NSMutableArray *serializedInputDataSources = [[NSMutableArray alloc] init];

  for (AVAudioSessionDataSourceDescription *inputDataSource in [AVAudioSession sharedInstance].inputDataSources) {
    [serializedInputDataSources addObject:@{
      @"dataSourceID": inputDataSource.dataSourceID,
      @"dataSourceName": inputDataSource.dataSourceName,
      @"location": inputDataSource.location,
      @"orientation": inputDataSource.orientation,
    }];
  }

  callback(@[[NSNull null], serializedInputDataSources]);
}

@end
