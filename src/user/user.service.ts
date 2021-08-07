import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserFollowing } from './userFollowing.model';

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
}
