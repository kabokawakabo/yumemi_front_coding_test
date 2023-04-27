import type { Prefecture } from "../../../../api/RESAS/prefectures";
import type { Id2NameObj, Name2IdObj } from "./type";

export const createIdNameObj = (data: Prefecture[]) => {
  const id2Name: Id2NameObj = {};
  const name2Id: Name2IdObj = {};
  for (const { prefCode, prefName } of data) {
    id2Name[prefCode] = prefName;
    name2Id[prefName] = prefCode;
  }

  return {
    id2Name,
    name2Id,
  };
};
