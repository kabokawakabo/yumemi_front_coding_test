import type { Prefecture } from "../../../../api/RESAS/prefectures";

export type Id2NameObj = {
  [key: number]: string;
};
export type Name2IdObj = {
  [key: string]: number;
};

export type onSuccessFunc = (data: Prefecture[]) => void;

export type getIdsFromNamesFunc = (names: string[]) => (number | undefined)[];
export type getNamesFromIdsFunc = (ids: number[]) => (string | undefined)[];
export type ContextValue = {
  getIdsFromNamesFunc: getIdsFromNamesFunc;
  getNamesFromIdsFunc: getNamesFromIdsFunc;
};
