import type { Prefecture } from "../../../../api/RESAS/prefectures";

export type Id2NameObj = {
  [key: number]: string;
};
export type Name2IdObj = {
  [key: string]: number;
};

export type onSuccessFunc = (data: Prefecture[]) => void;

export type PrefecturesContextValue = {
  getIdsFromNames: (names: string[]) => (number | undefined)[];
  getNamesFromIds: (ids: number[]) => (string | undefined)[];
};
