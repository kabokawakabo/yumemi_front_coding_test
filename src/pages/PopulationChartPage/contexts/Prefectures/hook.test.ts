import { renderHook } from "@testing-library/react";

import type { Name2IdObj, Id2NameObj } from "./type.ts";
import {
  createGetIdFromNameFunc,
  createGetNameFromIdFunc,
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

  test("createGetIdFromNameFunc| 名前からIDを取り出せるか、取り出せない場合undefinedを返すかテスト", () => {
    const name2Id: Name2IdObj = { 北海道: 1, 青森: 2, 岩手: 3 };
    const new_names = [...Object.keys(name2Id), "山口"];

    const getIdFromNameFunc = createGetIdFromNameFunc(name2Id);
    for (const i of new_names.keys()) {
      const name = new_names[i];
      const id = getIdFromNameFunc(name);
      expect(id).toBe(name2Id[name]);
    }
  });

  test("createGetNameFromIdFunc| IDから名前を取り出せるか、取り出せない場合 undefinedを返すかテスト", () => {
    const id2Name: Id2NameObj = { 1: "北海道", 2: "青森", 3: "岩手" };
    const new_ids = [...Object.keys(id2Name).map(Number), 5];

    const getNameFromIdFunc = createGetNameFromIdFunc(id2Name);
    for (const i of new_ids.keys()) {
      const id = new_ids[i];
      const name = getNameFromIdFunc(id);
      expect(name).toBe(id2Name[id]);
    }
  });
});
