import { Injectable } from '@nestjs/common';
import { JwtPayload, UserDetails } from 'src/utils/types';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/User.entity';
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

    if (user) {
      await this.userRepository.save({
        ...user,
        imageUrl: googleUser.imageUrl,
      });
      return user;
    }

    const newUser = this.userRepository.create({
      email: googleUser.email,
      Name: googleUser.name,
      imageUrl: googleUser.imageUrl,
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

  async findByRefreshToken(email: string, refresh_token: string) {
    const user = await this.userRepository.find({
      where: {
        email,
        refresh_token,
      },
    });
    return user;
  }

  async updateRefreshToken(user: User, refresh_token: string) {
    user.refresh_token = refresh_token;

    return await this.userRepository.save(user);
  }
}
