import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tweet } from './tweet.model';
import { TweetResolver } from './tweet.resolver';
import { TweetService } from './tweet.service';

@Module({
  imports:[SequelizeModule.forFeature([Tweet])],
  providers: [TweetService, TweetResolver]
})
export class TweetModule {}
