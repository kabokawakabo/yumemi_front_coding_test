import type { ContextValue } from "./type.ts";
import { PrefecturesContext } from "./context";
import {
  allPrefCodes,
  createGetNameFromIdFunc,
  createGetIdFromNameFunc,
  usePrefectureData,
} from "./hook.ts";

type PrefecturesProviderProps = {
  children: React.ReactNode;
};
export const PrefecturesProvider: React.FC<PrefecturesProviderProps> = ({
  children,
}) => {
  const { id2Name, name2Id } = usePrefectureData();
  const all_prefCodes = allPrefCodes(id2Name);
  const getNameFromIdFunc = createGetNameFromIdFunc(id2Name);
  const getIdFromNameFunc = createGetIdFromNameFunc(name2Id);

  const value: ContextValue = {
    all_prefCodes,
    getNameFromIdFunc,
    getIdFromNameFunc,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
