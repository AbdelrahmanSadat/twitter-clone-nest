import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
// import { AuthController } from './auth.controller';
import { AppModule } from 'src/app.module';
import { User } from 'src/user/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserService } from 'src/user/user.service';
import { UserFollowing } from 'src/user/userFollowing.model';

// todo: remove unneccessary forwardRefs
@Module({
  imports: [
    UserModule,
    SequelizeModule.forFeature([User, UserFollowing]),
    forwardRef(() => AppModule),
    forwardRef(() => AuthModule),
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '86400s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
