import { ColorCodeInPickerError } from "./error/ColorCodeInPickerError";

const RADIX = 16;
const IN_MAX_VALUE = parseInt("ffffff", RADIX);

export const createRandomColorCode = () => {
  /// NOTE: 最大値も含めるため +1
  const value = Math.floor(Math.random() * IN_MAX_VALUE + 1);
  return "#" + value.toString(RADIX);
};

export const validateInPicker = (color_code: string) => {
  // NOTE:  color_pickerの valueは #f00 形式では反映されないため形式チェック
  const isNotLen7 = color_code.length !== 7;
  const hasNotShape = color_code[0] !== "#";
  if (isNotLen7 || hasNotShape) throw new ColorCodeInPickerError(color_code);

  const hex_str = color_code.substring(1);
  const hex = parseInt(hex_str, RADIX);
  const isNotHex = Number.isNaN(hex);
  if (isNotHex) throw new ColorCodeInPickerError(color_code);
};
