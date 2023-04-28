import { renderHook, act } from "@testing-library/react";

import { usePrefectureColorPickerData } from "./hook.ts";

describe("contextテスト、PrefectureColorPicker Hook", () => {
  test("usePrefectureColorPickerData| props変更時 データが追加されるかテスト", () => {
    const initial_prefCodes = [1];
    const new_prefCodes = [1, 2];
    const { result, rerender } = renderHook(
      (props) => usePrefectureColorPickerData(props),
      {
        initialProps: initial_prefCodes,
      }
    );

    rerender(new_prefCodes);
    const all_prefCodes = [
      ...new Set([...initial_prefCodes, ...new_prefCodes]),
    ];
    for (const prefCode of all_prefCodes) {
      const color_code = result.current.getColorCodeFunc(prefCode);
      expect(color_code).not.toBe(undefined);
    }
  });

  test("usePrefectureColorPickerData| propsに新たなデータが加えられても既存データのカラーコードは不変かテスト（propの数が同じで要素内容が違う...状態が発生しない条件）", () => {
    const EXIST_ID = 1;
    const initial_prefCodes = [EXIST_ID];
    const new_prefCodes = [EXIST_ID, 2]; /// checkboxで prefCode 2 を選択
    const { result, rerender } = renderHook(
      (props) => usePrefectureColorPickerData(props),
      {
        initialProps: initial_prefCodes,
      }
    );

    const before_color_code = result.current.getColorCodeFunc(EXIST_ID);
    rerender(new_prefCodes);
    const after_color_code = result.current.getColorCodeFunc(EXIST_ID);

    expect(before_color_code).toBe(after_color_code);
  });

  test("usePrefectureColorPickerData| get関数、該当するidが存在しない場合undefinedを返すかテスト", () => {
    const { result } = renderHook(() => usePrefectureColorPickerData([1]));

    const color_code = result.current.getColorCodeFunc(2);
    expect(color_code).toBe(undefined);
  });

  test("usePrefectureColorPickerData| set関数、値が更新できるかテスト", () => {
    const EXIST_ID = 1;
    const initial_prefCodes = [EXIST_ID];
    const { result } = renderHook(() =>
      usePrefectureColorPickerData(initial_prefCodes)
    );

    const before_color_code = result.current.getColorCodeFunc(EXIST_ID);
    act(() => result.current.setColorCodeFunc(EXIST_ID, "#新たなカラーコード")); //NOTE: カラーコードバリデーションは行わない
    const after_color_code = result.current.getColorCodeFunc(EXIST_ID);

    expect(before_color_code).not.toBe(after_color_code);
  });
});
