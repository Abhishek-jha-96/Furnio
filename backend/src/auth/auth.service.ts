import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bycrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { AccessToken } from './types/AccessToken';

@Injectable()
export class AuthService {
  /**
   * Constructor
   * @ param userService User service
   * @ param jwtService JWT service
   */
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.userService.findOne(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const isMatch: boolean = await bycrypt.compareSync(password, user.password);
    if (!isMatch) {
      throw new BadRequestException('Password does not match');
    }
    return user;
  }
  async login(user: User): Promise<AccessToken> {
    const payload = { email: user.email, uid: user.uid };
    return { access_token: this.jwtService.sign(payload) };
  }

  async register(user: RegisterRequestDto): Promise<AccessToken> {
    const existingUser = this.userService.findOne(user.email);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bycrypt.hash(user.password, 10);
    const newUser: Partial<User> = {
      ...user,
      password: hashedPassword,
    };
    const createdUser = await this.userService.create(newUser);
    return this.login(createdUser);
  }
}