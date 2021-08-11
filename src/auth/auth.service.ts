import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
// import { CreateUserDto } from 'src/users/dto/user.create.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(userData){
    //? Created User?
    let verificationCode = Math.floor(Math.random()*1000000);
    userData.verificationCode = verificationCode;
    let createdUser = this.usersService.create(userData);
    return createdUser;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (isMatch) return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email:user.email, sub: user.id, role: user.role, verified: user.verified };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


  async verify(user: any, verificationCode: number){
    let foundUser = await this.usersService.findOne(user.id);
    if(""+verificationCode == foundUser.verificationCode){
      foundUser.verified = true;
      await foundUser.save();
      return "User is verified"
    }
    // TODO: clean this up
    return "Code is not correct, smth "
  }
}
