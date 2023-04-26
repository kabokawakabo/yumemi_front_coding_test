import { useState } from "react";

import type { Id2NameObj, Name2IdObj, onSuccessFunc } from "./type";
import { useGetPrefecturesQuery } from "./query";

const useOnSuccess = (
  setId2Name: (d: Id2NameObj) => void,
  setName2Id: (d: Name2IdObj) => void
): onSuccessFunc => {
  return (data) => {
    const id2Name: Id2NameObj = {};
    const name2Id: Name2IdObj = {};
    for (const { prefCode, prefName } of data) {
      id2Name[prefCode] = prefName;
      name2Id[prefName] = prefCode;
    }

    setId2Name(id2Name);
    setName2Id(name2Id);
  };
};

export const usePrefectureData = () => {
  const [id2Name, setId2Name] = useState<Id2NameObj>({});
  const [name2Id, setName2Id] = useState<Name2IdObj>({});
  const onSuccess = useOnSuccess(setId2Name, setName2Id);

  useGetPrefecturesQuery(onSuccess);

  return {
    id2Name,
    name2Id,
  };
};

export const useGetNamesFromIdsFunc = (id2Name: Id2NameObj) => {
  return (ids: number[]): (string | undefined)[] => {
    return ids.map((id) => id2Name[id]);
  };
};

export const useGetIdsFromNamesFunc = (name2Id: Name2IdObj) => {
  return (names: string[]): (number | undefined)[] => {
    return names.map((name) => name2Id[name]);
  };
};
