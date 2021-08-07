import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { Tweet } from './tweet.model';

@Injectable()
export class TweetService {
  constructor(@InjectModel(Tweet) private tweetModel: typeof Tweet) {}

  async testService() {}

  async findOne(tweetId): Promise<Tweet> {
    return this.tweetModel.findOne({
      where: { id: tweetId },
      include: [{ model: User, as: 'user' }],
    });
  }
}
