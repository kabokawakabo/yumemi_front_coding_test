import { createContext } from "react";
import type { PrefecturesContextValue } from "./type";

const defaultValue: PrefecturesContextValue = {
  getIdsFromNamesFunc: () => [],
  getNamesFromIdsFunc: () => [],
};
export const PrefecturesContext = createContext(defaultValue);
