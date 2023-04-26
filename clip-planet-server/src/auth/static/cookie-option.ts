import expire from 'src/utils/getExpires';

interface CookieOptions {
  expires: Date;
  sameSite: 'lax' | 'none';
  secure: boolean;
  domain: string;
}

const cookieCommonOptions = (
  tokenName: 'refresh-token' | 'token',
): CookieOptions => ({
  expires: expire(tokenName),
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  secure: process.env.NODE_ENV === 'production',
  domain:
    process.env.NODE_ENV === 'production' ? '.clip-planet.site' : 'localhost',
});

export default cookieCommonOptions;
