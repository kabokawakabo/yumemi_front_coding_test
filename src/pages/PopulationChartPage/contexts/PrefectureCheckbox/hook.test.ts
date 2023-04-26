import { renderHook, act } from "@testing-library/react";

import { useSelectedIds } from "./hook.ts";

describe("contextテスト、PrefectureCheckbox Hook", () => {
  test("useSelectedIds| selected_idを追加、削除（既に追加されている場合、削除されるか）をテスト", () => {
    const { result } = renderHook(() => useSelectedIds());

    const getSelectedLen = () => result.current.selected_ids.length;
    const actAndValidate = (prefCode: number, expect_len: number) => {
      act(() => result.current.addOrRemovePrefCode(prefCode));

      const len = getSelectedLen();
      expect(len).toBe(expect_len);
    };

    const first_len = getSelectedLen();
    expect(first_len).toBe(0);

    const firstPrefCode = 1;
    const secondPrefCode = 2;
    actAndValidate(firstPrefCode, 1);
    actAndValidate(secondPrefCode, 2);
    actAndValidate(firstPrefCode, 1); // 削除
  });
});
