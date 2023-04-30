import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  all_prefCodes: [],
  getIdFromNameFunc: () => undefined,
  getNameFromIdFunc: () => undefined,
};
export const PrefecturesContext = createContext(defaultValue);
