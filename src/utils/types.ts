export type UserDetails = {
  provider: 'google';
  providerId: any;
  name: string;
  email: string;
  refreshToken: string;

  // provider: 'google',
  // providerId: id,
  // name: displayName,
  // email: emails[0].value,
};

export type JwtPayload = {
  id: number;
  email: string;
  refreshToken?: string;
};
