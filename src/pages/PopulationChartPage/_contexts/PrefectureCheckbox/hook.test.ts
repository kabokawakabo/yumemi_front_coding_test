import { renderHook, act } from "@testing-library/react";

import { useSelectedIds } from "./hook.ts";

describe("contextテスト、PrefectureCheckbox Hook", () => {
  test("useSelectedIds| selected_idを追加、削除（既に追加されている場合、削除されるか）をテスト", () => {
    const expect_set = new Set<number>([]);
    const { result } = renderHook(() => useSelectedIds());

    const actFunc = (prefCode: number) => {
      act(() => result.current.addOrRemovePrefCode(prefCode));
    };
    const validateElementCount = (state_ids: number[]) => {
      expect(state_ids.length).toBe(expect_set.size);
    };
    const validateElementValues = (state_ids: number[]) => {
      for (const prefCode of state_ids) {
        expect(expect_set.has(prefCode)).toBe(true);
      }
    };
    const validate = () => {
      const selected_ids = result.current.selected_ids;
      validateElementCount(selected_ids);
      validateElementValues(selected_ids);
    };

    const addValidate = (prefCode: number) => {
      actFunc(prefCode);
      expect_set.add(prefCode);
      validate();
    };
    const removeValidate = (prefCode: number) => {
      actFunc(prefCode);
      expect_set.delete(prefCode);
      validate();
    };

    addValidate(1);
    addValidate(2);
    addValidate(3);
    addValidate(4);

    removeValidate(2);
    removeValidate(1);
  });
});
