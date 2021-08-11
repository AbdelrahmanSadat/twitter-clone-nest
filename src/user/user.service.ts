import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from 'src/tweet/tweet.model';
import { User } from './user.model';
import { UserFollowing } from './userFollowing.model';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    @InjectModel(UserFollowing)
    private userFollowingModel: typeof UserFollowing,
  ) {}

  // TODO: argument and return types
  createDemo(): Promise<User> {
    return this.userModel.create({
      username: 'user man',
      email: 'userman@mail.com',
      verified: true,
      verificationCode: '0000',
      passwordHash: 'password',
    });
  }

  // TODO: remove prototype shit
  follow(userId, followingId) {
    this.userFollowingModel.create({ userId, followingId });
  }

  findWithFollowing(userId) {
    return this.userModel.findOne({
      where: { id: userId },
      include: [
        { model: User, as: 'following' },
        { model: User, as: 'followers' },
      ],
    });
  }

  async findOne(userId: number): Promise<User> {
    return this.userModel.findOne({
      where: { id: userId },
      include: [
        { model: User, as: 'following' },
        { model: User, as: 'followers' },
        { model: Tweet, as: 'tweets' },
      ],
    });
  }

  findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }


  // todo: rewrite
  async create(userData): Promise<User> {
    // todo: there's cleaner syntax to do this
    const userToCreate = new User();
    userToCreate.username = userData.username;
    userToCreate.email = userData.email;
    userToCreate.verificationCode = userData.verificationCode;
    userToCreate.passwordHash = await bcrypt.hash(userData.password, 10);

    let createdUser = await userToCreate.save();
    // TODO: user DTOs & mappers?
    createdUser.passwordHash = undefined;

    return createdUser;
  }
}
