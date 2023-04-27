import { ColorCodeInPickerError } from "./error/ColorCodeInPickerError.ts";
import {
  IN_MAX_VALUE,
  _randomHexLen6,
  validateInPicker,
} from "./createColorCode.ts";

describe("utilテスト、createColorCode", () => {
  test("create| ランダム結果0の時、最小値0を作成", () => {
    const value = _randomHexLen6(0);
    expect(value).toBe(0);
  });

  test("create| ランダム結果1に限りなく近い場合、最大値 を出力", () => {
    const mini_value = 0.1 ** 30;
    const value = _randomHexLen6(1.0 - mini_value);
    expect(value).toBe(IN_MAX_VALUE);
  });

  test("validate| 文字数以上のhexでエラーを返すか", () => {
    expect(() => validateInPicker("#0000000")).toThrow(ColorCodeInPickerError);
  });

  test("validate| hexではない文字でエラーを返すか", () => {
    expect(() => validateInPicker("#g00000")).toThrow(ColorCodeInPickerError);
  });

  test("validate| #以外の文字を先頭に", () => {
    expect(() => validateInPicker("0000000")).toThrow(ColorCodeInPickerError);
  });

  test("validate| 正常動作", () => {
    expect(() => validateInPicker("#000000")).not.toThrow(
      ColorCodeInPickerError
    );
    expect(() => validateInPicker("#ffffff")).not.toThrow(
      ColorCodeInPickerError
    );
  });
});
