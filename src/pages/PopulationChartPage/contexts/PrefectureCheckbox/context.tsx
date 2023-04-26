import { createContext } from "react";
import type { ContextValue } from "./type";

const defaultValue: ContextValue = {
  selected_ids: [],
  addOrRemovePrefCode: () => undefined,
};
export const PrefectureCheckboxContext = createContext(defaultValue);
