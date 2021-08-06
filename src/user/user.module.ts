import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserFollowing } from './userFollowing.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserFollowing])],
  providers: [UserService]
})
export class UserModule {}
