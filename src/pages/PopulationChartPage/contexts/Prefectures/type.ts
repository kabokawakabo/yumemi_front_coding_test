import type { Prefecture } from "../../../../api/RESAS/prefectures";

export type Id2NameObj = {
  [key: number]: string;
};
export type Name2IdObj = {
  [key: string]: number;
};

export type onSuccessFunc = (data: Prefecture[]) => void;

export type ContextValue = {
  getIdsFromNamesFunc: (names: string[]) => (number | undefined)[];
  getNamesFromIdsFunc: (ids: number[]) => (string | undefined)[];
};
