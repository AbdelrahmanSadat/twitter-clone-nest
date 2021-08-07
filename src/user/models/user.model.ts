import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Tweet } from 'src/tweet/models/tweet.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  username: string;

  @Field()
  email: string;

  @Field()
  verificationCode: string;

  @Field()
  verified: boolean;

  @Field((type) => [Tweet])
  tweets: Tweet[];

  @Field((type) => [User])
  following: User[];

  @Field((type) => [User])
  followers: User[];

  // TODO: rest of fields (including following and followers?)
}
