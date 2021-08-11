import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/*
It's also worth pointing out that this approach leaves us room
('hooks' as it were) to inject other business logic into the 
process. For example, we could do a database lookup in our validate() 
method to extract more information about the user, resulting in a 
more enriched user object being available in our Request
*/

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      verified: payload.verified,
    };
  }
}
