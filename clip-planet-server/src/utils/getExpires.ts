const expire = (token: 'refresh-token' | 'token') => {
  const twoWeek = 14 * 24 * 3600 * 1000; //1 weeks
  const twoHour = 2 * (60 * 60 * 1000);
  if (token === 'refresh-token') return new Date(Date.now() + twoWeek);
  else return new Date(Date.now() + twoHour);
};

export default expire;
