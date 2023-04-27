const RADIX = 16;
const IN_MAX_VALUE = parseInt("ffffff", RADIX);

export const createRandomColorCode = () => {
  /// NOTE: 最大値も含めるため +1
  const value = Math.floor(Math.random() * IN_MAX_VALUE + 1);
  return "#" + value.toString(RADIX);
};
