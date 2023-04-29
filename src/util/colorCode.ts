import { ColorCodeInPickerError } from "./error/ColorCodeInPickerError";

const RADIX = 16;
export const IN_MAX_VALUE = parseInt("ffffff", RADIX); //テスト用にexport

const _randomHexLen6 = (zero2Ex0: number) => {
  /// NOTE: 1に限りなく近い値の場合、1の意味になる。結果、最大値(ffffff)が返る
  return Math.floor(zero2Ex0 * IN_MAX_VALUE);
};

export const createRandomColorCode = () => {
  /// NOTE: 最大値も含めるため +1
  const value = _randomHexLen6(Math.random());
  return "#" + value.toString(RADIX).padStart(6, "0");
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
