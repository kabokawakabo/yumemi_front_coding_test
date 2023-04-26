import { renderHook } from "@testing-library/react";

import type { Name2IdObj, Id2NameObj } from "./type.ts";
import {
  useGetIdsFromNames,
  useGetNamesFromIds,
  usePrefectureData,
} from "./hook.ts";

import { MockData } from "../../../../api/RESAS/mock/prefectures";
import { useGetPrefecturesQuery } from "./query.ts";
jest.mock("./query.ts");

describe("contextテスト、Prefecture Hook", () => {
  test("apiを呼び出した際、データを更新。prefCode(ID)からname、その逆を取り出せるかテスト", () => {
    const mock = useGetPrefecturesQuery as jest.MockedFunction<
      typeof useGetPrefecturesQuery
    >;
    let first_update = true;
    mock.mockImplementation((onSuccess) => {
      /// NOTE: 通常queryのSuccess時に呼ぶので無限ループにならない。モックでは起きるので書き込み1回に制限
      if (!first_update) return;
      onSuccess(MockData);
      first_update = false;
    });

    const { result } = renderHook(() => usePrefectureData());
    const { id2Name, name2Id } = result.current;
    for (const { prefCode, prefName } of MockData) {
      expect(id2Name[prefCode]).toBe(prefName);
      expect(name2Id[prefName]).toBe(prefCode);
    }
  });

  test("useGetIdsFromNames 、名前からIDを取り出せるかテスト", () => {
    const name2Id: Name2IdObj = { 北海道: 1, 青森: 2, 岩手: 3 };
    const new_name2Id: Name2IdObj = { ...name2Id, 宮城: 5 };
    const new_names = Object.keys(new_name2Id);
    const { result, rerender } = renderHook(
      (props) => useGetIdsFromNames({ ...props }),
      {
        initialProps: name2Id,
      }
    );

    const validate = (ids: (number | undefined)[], prop_obj: Name2IdObj) => {
      for (const i of new_names.keys()) {
        const name = new_names[i];
        const id = ids[i];
        expect(id).toBe(prop_obj[name]);
      }
    };
    const before_ids = result.current(new_names);
    validate(before_ids, name2Id); //一部undefined

    rerender({ ...new_name2Id });
    const after_ids = result.current(new_names);
    validate(after_ids, new_name2Id);
  });

  test("useGetNamesFromIds 、IDから名前を取り出せるか", () => {
    const name2Id: Id2NameObj = { 1: "北海道", 2: "青森", 3: "岩手" };
    const new_name2Id: Id2NameObj = { ...name2Id, 5: "宮城" };
    const new_ids = Object.keys(new_name2Id).map(Number);
    const { result, rerender } = renderHook(
      (props) => useGetNamesFromIds({ ...props }),
      { initialProps: name2Id }
    );

    const validate = (names: (string | undefined)[], prop_obj: Id2NameObj) => {
      for (const i of new_ids.keys()) {
        const id = new_ids[i];
        const name = names[i];
        expect(name).toBe(prop_obj[id]);
      }
    };
    const before_names = result.current(new_ids);
    validate(before_names, name2Id); // 一部undefined

    rerender({ ...new_name2Id });
    const after_names = result.current(new_ids);
    validate(after_names, new_name2Id);
  });
});
