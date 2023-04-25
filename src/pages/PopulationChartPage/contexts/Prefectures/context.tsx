import { createContext } from "react";

export type PrefecturesValue = {
  getIdsFromNames: (names: string[]) => number[];
  getNamesFromIds: (ids: number[]) => string[];
};

const defaultValue: PrefecturesValue = {
  getIdsFromNames: () => [],
  getNamesFromIds: () => [],
};
export const PrefecturesContext = createContext(defaultValue);
