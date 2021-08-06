import { Module } from '@nestjs/common';
import { TweetResolver } from './tweet.resolver';
import { TweetService } from './tweet.service';

@Module({
  providers: [TweetService, TweetResolver]
})
export class TweetModule {}
