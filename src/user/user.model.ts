import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  IsEmail,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Tweet } from 'src/tweet/tweet.model';
import { UserFollowing } from './userFollowing.model';
// import { UserFollowing } from './userFollowing.model';

@Table
export class User extends Model {
  // @Unique
  @Column
  username: string;

  @IsEmail
  @Column
  email: string;

  // TODO: defaults to true?
  @Column
  verified: boolean;

  @Column
  verificationCode: string;

  @Column
  passwordHash: string;

  @HasMany(() => Tweet, 'teacherId')
  tweets: Tweet[];

  @BelongsToMany(() => User, () => UserFollowing, 'userId')
  following: User[];

  @BelongsToMany(() => User, () => UserFollowing, 'followingId')
  followers: User[];
}
