import { Injectable } from '@nestjs/common';
import { JwtPayload, UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/User';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(googleUser: UserDetails) {
    //실제 유저를 찾아옴
    const user = await this.userRepository.findOneBy({
      email: googleUser.email,
    });
    if (user) return user;
    const newUser = this.userRepository.create({
      email: googleUser.email,
      Name: googleUser.name,
      refresh_token: null,
    });
    return await this.userRepository.save(newUser);
  }

  getToken(payload: JwtPayload) {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '2h',
      secret: process.env.JWT_SECRET,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '14d',
      secret: process.env.JWT_SECRET,
    });

    return { accessToken, refreshToken };
  }

  async findByRefreshToken(email, refresh_token: string) {
    return await this.userRepository.findOne({
      where: { email, refresh_token },
    });
  }

  async updateRefreshToken(user: User, refresh_token: string) {
    user.refresh_token = refresh_token;

    return await this.userRepository.save(user);
  }
}
