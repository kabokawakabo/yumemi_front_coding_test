import { addRankSuffix, addRankSuffixWithSignificantDigit } from "./util";

describe("LineChart ui", () => {
  test("addRankSuffix| 単位が追加された文字列を返すか", () => {
    expect(addRankSuffix(10 ** 3)).toBe("1000");
    expect(addRankSuffix(10 ** 4)).toBe("1万");
    expect(addRankSuffix(10 ** 7)).toBe("1000万");
    expect(addRankSuffix(10 ** 8)).toBe("1億");
    expect(addRankSuffix(10 ** 13)).toBe("10兆");
    expect(addRankSuffix(10 ** 16)).toBe("10000兆");

    expect(addRankSuffix(10 ** 9 + 10 ** 2)).toBe("10億100");
    expect(addRankSuffix(10 ** 16 + 10 ** 5)).toBe("10000兆10万");
  });

  test("addRankSuffixWithSignificantDigit| 最大単位 & 有効数字まで表示", () => {
    expect(addRankSuffixWithSignificantDigit(10 ** 7 + 10 ** 5, 2)).toBe(
      "1010万"
    );
    expect(addRankSuffixWithSignificantDigit(10 ** 9 + 10 ** 6, 5)).toBe(
      "10.010億"
    );
    expect(addRankSuffixWithSignificantDigit(10 ** 9 + 10 ** 2, 3)).toBe(
      "10.0億"
    );

    expect(addRankSuffixWithSignificantDigit(10 ** 8 + 10 ** 4, 5)).toBe(
      "1.0001億"
    );
    expect(addRankSuffixWithSignificantDigit(10 ** 9, 0)).toBe("10億");
  });
});
