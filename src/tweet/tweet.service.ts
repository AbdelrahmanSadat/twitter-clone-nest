import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from './tweet.model';

@Injectable()
export class TweetService {
    constructor(
        @InjectModel(Tweet) private tweetModel: typeof Tweet
    ){}

    async testService (){
        
    }
}
