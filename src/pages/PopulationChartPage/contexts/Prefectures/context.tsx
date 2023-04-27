import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  getIdsFromNamesFunc: () => [],
  getNamesFromIdsFunc: () => [],
};
export const PrefecturesContext = createContext(defaultValue);
