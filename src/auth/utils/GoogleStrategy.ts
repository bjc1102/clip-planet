import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ['profile', 'email'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, displayName, emails, photos } = profile;

    return {
      provider: 'google',
      providerId: id,
      name: displayName,
      imageUrl: photos[0].value,
      email: emails[0].value,
    };
  }
}
