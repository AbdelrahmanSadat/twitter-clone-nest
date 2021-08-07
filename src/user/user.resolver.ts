import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // the options passed to @query allow decoupling the method name
  // from the query name, since it's the same by default
  @Query((returns) => User, { name: 'user' })
  async getUser() {
    return await this.userService.createDemo();
  }

  @Query((returns) => User, { name: 'follow' })
  async follow(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('followingId', { type: () => Int }) followingId: number,
  ) {
    // let followed = await this.userService.follow(userId, followingId);
    // console.log(followed);
    let foundUser = await this.userService.findWithFollowing(userId);
    console.log("wake up")
    console.log(foundUser)
    return await this.userService.createDemo();
  }

  // @ResolveField('text', returns => String)
  // async getText(@Parent() tweet: Tweet) {
  //   const { id } = tweet;
  //   // return this.postsService.findAll({ authorId: id });
  //   return tweet.text + " there"
  // }
}
