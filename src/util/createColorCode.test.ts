import { ColorCodeInPickerError } from "./error/ColorCodeInPickerError.ts";
import { validateInPicker } from "./createColorCode.ts";

describe("utilテスト、createColorCode", () => {
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
