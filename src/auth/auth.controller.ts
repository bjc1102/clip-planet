/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
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
  async handleRedirect(@Req() req: Request, @Res() res: Response) {
    //@ts-ignore
    const payload: JwtPayload = { email: req.user.email };
    const { accessToken, refreshToken } = this.AuthService.getToken(payload);

    const user = await this.AuthService.validateUser({
      //@ts-ignore
      ...req.user,
      refreshToken,
    } as UserDetails);

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
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { refreshToken, email } = req.user as JwtPayload;

    const user = await this.AuthService.findByRefreshToken(email, refreshToken);
    const token = this.AuthService.getToken({ email });
    await this.AuthService.updateRefreshToken(user, token.refreshToken);

    response.cookie('access-token', token.accessToken, {
      expires: expire('token'),
    });
    response.cookie('refresh-token', token.refreshToken, {
      expires: expire('refresh-token'),
    });

    response.send({ message: 'success' });
  }
}
