/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { User } from 'src/database/User.entity';
import { UserDecorator } from 'src/types/user.decorator';
import expire from 'src/utils/getExpires';
import { JwtPayload, UserDetails } from 'src/utils/types';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  // /api/auth/google/login
  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async handleRedirect(
    @Req() req: Request,
    @Res() res: Response,
    @UserDecorator() userInfo: User,
  ) {
    //@ts-ignore
    const user = await this.AuthService.validateUser({
      ...userInfo,
    } as UserDetails);

    //유저 정보로 jwt 토큰 생성하기
    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = this.AuthService.getToken(payload);
    const setRefreshToken = await this.AuthService.updateRefreshToken(
      user,
      refreshToken,
    );

    res.cookie('access-token', accessToken, {
      expires: expire('token'),
    });
    res.cookie('refresh-token', refreshToken, {
      expires: expire('refresh-token'),
    });

    res.redirect(process.env.DOMAIN);
  }

  // api/auth/refresh
  @Post('refresh')
  @UseGuards(AuthGuard('jwt-refresh'))
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
    @UserDecorator() userInfo: User,
  ) {
    const { refreshToken, email, id } = userInfo as JwtPayload;

    const user = await this.AuthService.findByRefreshToken(email, refreshToken);
    const token = this.AuthService.getToken({ id, email });
    await this.AuthService.updateRefreshToken(user[0], token.refreshToken);

    response.cookie('access-token', token.accessToken, {
      expires: expire('token'),
    });
    response.cookie('refresh-token', token.refreshToken, {
      expires: expire('refresh-token'),
    });

    response.send({ message: 'success' });
  }
}
