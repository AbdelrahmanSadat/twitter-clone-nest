import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetModule } from './tweet/tweet.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    GraphQLModule.forRoot({autoSchemaFile: true,}),
    SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      dialect: configService.get('DB_DIALECT'),
      host: configService.get('DB_HOST'),
      port: +configService.get('DB_PORT'),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      autoLoadModels: true,
      synchronize: true,
    }),
    inject: [ConfigService],
  }),
    TweetModule,],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
