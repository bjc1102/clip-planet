export type UserDetails = {
  provider: 'google';
  providerId: any;
  name: string;
  email: string;

  // provider: 'google',
  // providerId: id,
  // name: displayName,
  // email: emails[0].value,
};

export type JwtPayload = {
  email: string;
};
