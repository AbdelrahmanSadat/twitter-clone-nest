import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Tweet } from "./models/tweet.model";
import { TweetService } from "./tweet.service";

@Resolver(of => Tweet)
export class TweetResolver {
  constructor(
    private authorsService: TweetService,
  ) {}

  // the options passed to @query allow decoupling the method name
  // from the query name, since it's the same by default
  @Query(returns => Tweet, {name: 'tweet'})
  async getTweet(@Args('id', { type: () => Int }) id: number) {
    // return this.authorsService.findOneById(id);
    return {
        id: 1,
        text: "hellooooo"
    }
  }

  // @ResolveField('text', returns => String)
  // async getText(@Parent() tweet: Tweet) {
  //   const { id } = tweet;
  //   // return this.postsService.findAll({ authorId: id });
  //   return tweet.text + " there"
  // }
}