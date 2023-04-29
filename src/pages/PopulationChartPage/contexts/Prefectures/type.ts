import type { Prefecture } from "../../../../api/RESAS/prefectures/type";

export type Id2NameObj = {
  [key: number]: string;
};
export type Name2IdObj = {
  [key: string]: number;
};

export type onSuccessFunc = (data: Prefecture[]) => void;

export type getIdFromNameFunc = (name: string) => number | undefined;
export type getNameFromIdFunc = (id: number) => string | undefined;
export type ContextValue = {
  all_prefCodes: number[];
  getIdFromNameFunc: getIdFromNameFunc;
  getNameFromIdFunc: getNameFromIdFunc;
};
