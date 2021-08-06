import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  IsEmail,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from '../user/user.model';

// TODO: explore available decorators

@Table
export class Tweet extends Model {
  // @Unique
  @Column
  text: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  // @BelongsToMany(() => User, () => UserCourses, 'courseId')
  // students: User[];
}
