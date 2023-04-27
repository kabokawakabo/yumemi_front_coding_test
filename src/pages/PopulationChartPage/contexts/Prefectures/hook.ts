import { useState } from "react";

import type {
  Id2NameObj,
  Name2IdObj,
  getIdsFromNamesFunc,
  getNamesFromIdsFunc,
  onSuccessFunc,
} from "./type";
import { useGetPrefecturesQuery } from "./query";
import { createIdNameObj } from "./otherFunc";

const useOnSuccess = (
  setId2Name: (d: Id2NameObj) => void,
  setName2Id: (d: Name2IdObj) => void
): onSuccessFunc => {
  return (data) => {
    const { id2Name, name2Id } = createIdNameObj(data);

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

export const useGetNamesFromIdsFunc = (
  id2Name: Id2NameObj
): getNamesFromIdsFunc => {
  return (ids) => {
    return ids.map((id) => id2Name[id]);
  };
};

export const useGetIdsFromNamesFunc = (
  name2Id: Name2IdObj
): getIdsFromNamesFunc => {
  return (names) => {
    return names.map((name) => name2Id[name]);
  };
};
