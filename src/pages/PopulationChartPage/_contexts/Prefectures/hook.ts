import { useState } from "react";

import type {
  Id2NameObj,
  Name2IdObj,
  getIdFromNameFunc,
  getNameFromIdFunc,
  onSuccessFunc,
} from "./type";
import { useGetPrefecturesQuery } from "./query";
import { createIdNameObj } from "./mock";

const createOnSuccess = (
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
  const onSuccess = createOnSuccess(setId2Name, setName2Id);

  useGetPrefecturesQuery(onSuccess);

  return {
    id2Name,
    name2Id,
  };
};

export const allPrefCodes = (id2Name: Id2NameObj) => {
  return Object.keys(id2Name).map(Number);
};

export const createGetNameFromIdFunc = (
  id2Name: Id2NameObj
): getNameFromIdFunc => {
  return (id) => id2Name[id];
};

export const createGetIdFromNameFunc = (
  name2Id: Name2IdObj
): getIdFromNameFunc => {
  return (name) => name2Id[name];
};
