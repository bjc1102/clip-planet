const replaceUndefined = function <Type>(object: Type, key: string) {
  if (!object) return '';
  return object[key];
};

export default replaceUndefined;
