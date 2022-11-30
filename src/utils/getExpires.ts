const expire = () => {
  const twoWeek = 14 * 24 * 3600 * 1000; //2 weeks
  return new Date(Date.now() + twoWeek);
};

export default expire;
