import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';
import { Tweet } from './models/tweet.model';
import { TweetService } from './tweet.service';

@Resolver((of) => Tweet)
export class TweetResolver {
  constructor(private tweetService: TweetService) {}

  // the options passed to @query allow decoupling the method name
  // from the query name, since it's the same by default
  @Query((returns) => Tweet, { name: 'tweet' })
  async getTweet(@Args('tweetId', { type: () => Int }) tweetId: number) {
    let foundTweet = await this.tweetService.findOne(tweetId);
    let returnTweet: any = foundTweet;
    returnTweet.author = foundTweet.user;

    return returnTweet;
  }
}
