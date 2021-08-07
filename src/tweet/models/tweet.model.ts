import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

@ObjectType()
export class Tweet {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  text?: string;

  @Field((type) => User)
  author: User;
}
