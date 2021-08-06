import { Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "src/user/user.model"

@Table
export class UserFollowing extends Model {
  @ForeignKey(() => User)
  @Column
  followingId: number

  @ForeignKey(() => User)
  @Column
  userId: number
}