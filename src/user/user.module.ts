import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserFollowing } from './userFollowing.model';

@Module({
  imports: [SequelizeModule.forFeature([User, UserFollowing])],
  providers: [UserService, UserResolver]
})
export class UserModule {}
