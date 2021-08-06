import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tweet {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  text?: string;

//   TODO: add user type
//   @Field({ nullable: true })
//   tweet?: string;
}