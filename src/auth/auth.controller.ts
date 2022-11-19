import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
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

  //api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async handleRedirect(@Req() req: Request, @Res() res: Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const user = await this.AuthService.validateUser(req.user as UserDetails);
    const payload: JwtPayload = { email: user.email };

    const { accessToken, refreshToken } = this.AuthService.getToken(payload);
    res.cookie('access-token', accessToken);
    res.cookie('refresh-token', refreshToken);

    res.redirect(process.env.DOMAIN);
  }
}
