import { createContext } from "react";
import type { PrefecturesContextValue } from "./type";

const defaultValue: PrefecturesContextValue = {
  getIdsFromNames: () => [],
  getNamesFromIds: () => [],
};
export const PrefecturesContext = createContext(defaultValue);
