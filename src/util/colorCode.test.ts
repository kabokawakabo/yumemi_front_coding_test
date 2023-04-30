import { ColorCodeInPickerError } from "./error/ColorCodeInPickerError.ts";
import { createRandomColorCode, validateInPicker } from "./colorCode.ts";

const createMock_MathRandom = (value: number) => {
  jest.spyOn(global.Math, "random").mockReturnValue(value);
};

describe("utilテスト、colorCode", () => {
  test("create| ランダム結果0の時、黒色を作成", () => {
    createMock_MathRandom(0);
    const color_code = createRandomColorCode();
    expect(color_code).toBe("#000000");
  });

  test("create| ランダム結果1に限りなく近い場合、白色を作成", () => {
    const mini_value = 0.1 ** 30;
    createMock_MathRandom(1 - mini_value);

    const color_code = createRandomColorCode();
    expect(color_code).toBe("#ffffff");
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
