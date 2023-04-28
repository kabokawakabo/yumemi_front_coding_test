import { addIntRankSuffix, addIntRankSuffixWithSignificantDigit } from "./util";

describe("LineChart ui", () => {
  test("addIntRankSuffix| 単位が追加された文字列を返すか", () => {
    expect(addIntRankSuffix(10 ** 3)).toBe("1000");
    expect(addIntRankSuffix(10 ** 4)).toBe("1万");
    expect(addIntRankSuffix(10 ** 7)).toBe("1000万");
    expect(addIntRankSuffix(10 ** 8)).toBe("1億");
    expect(addIntRankSuffix(10 ** 13)).toBe("10兆");
    expect(addIntRankSuffix(10 ** 16)).toBe("10000兆");

    expect(addIntRankSuffix(10 ** 9 + 10 ** 2)).toBe("10億100");
    expect(addIntRankSuffix(10 ** 16 + 10 ** 5)).toBe("10000兆10万");
  });

  test("addIntRankSuffixWithSignificantDigit| 最大単位 & 有効数字まで表示", () => {
    expect(addIntRankSuffixWithSignificantDigit(10 ** 7 + 10 ** 5, 2)).toBe(
      "1010万"
    );
    expect(addIntRankSuffixWithSignificantDigit(10 ** 9 + 10 ** 6, 5)).toBe(
      "10.010億"
    );
    expect(addIntRankSuffixWithSignificantDigit(10 ** 9 + 10 ** 2, 3)).toBe(
      "10.0億"
    );

    expect(addIntRankSuffixWithSignificantDigit(10 ** 8 + 10 ** 4, 5)).toBe(
      "1.0001億"
    );
    expect(addIntRankSuffixWithSignificantDigit(10 ** 9, 0)).toBe("10億");
  });
});
