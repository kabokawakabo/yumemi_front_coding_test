import { renderHook } from "@testing-library/react";

import type { Name2IdObj, Id2NameObj } from "./type.ts";
import {
  allPrefCodes,
  createGetIdFromNameFunc,
  createGetNameFromIdFunc,
  usePrefectureData,
} from "./hook.ts";

import { MockData } from "../../../../api/RESAS/prefectures/mock.ts";
import { createMockQuery } from "./mock.ts";
jest.mock("./query.ts");

describe("contextテスト、Prefecture Hook", () => {
  test("apiを呼び出した際、データを更新。prefCode(ID)からname、その逆を取り出せるかテスト", () => {
    createMockQuery(MockData);

    const { result } = renderHook(() => usePrefectureData());
    const { id2Name, name2Id } = result.current;
    for (const { prefCode, prefName } of MockData) {
      expect(id2Name[prefCode]).toBe(prefName);
      expect(name2Id[prefName]).toBe(prefCode);
    }
  });

  test("allPrefCodes| id2Nameデータから全ての県codeを取り出せるかテスト", () => {
    const id2Name: Id2NameObj = { 1: "北海道", 2: "青森", 3: "岩手" };
    const expect_set = new Set([1, 2, 3]);

    const all_prefCodes = allPrefCodes(id2Name);
    expect(all_prefCodes.length).toBe(expect_set.size);
    for (const prefCode of all_prefCodes) {
      const hasBool = expect_set.has(prefCode);
      expect(hasBool).toBe(true);
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
