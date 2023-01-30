export type UserDetails = {
  provider: 'google';
  providerId: any;
  name: string;
  email: string;
  imageUrl: string;
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
