import { jaTickFormatter } from "./util";

describe("LineChart ui", () => {
  test("jaTickFormatter| 単位表示変更チェック", () => {
    expect(jaTickFormatter(1000000000000)).toBe("10000億");
    expect(jaTickFormatter(100000000)).toBe("1億");

    expect(jaTickFormatter(10000)).toBe("1万");
    expect(jaTickFormatter(300020000)).toBe("30002万");

    expect(jaTickFormatter(1000)).toBe("1000");
    expect(jaTickFormatter(10000100)).toBe("10000100");
  });

  test("jaTickFormatter| 単位表示変更チェック(強制ver)", () => {
    expect(jaTickFormatter(1000, true)).toBe("1000");
    expect(jaTickFormatter(10000100, true)).toBe("1000万");
    expect(jaTickFormatter(1000000111111, true)).toBe("10000億");
  });
});
