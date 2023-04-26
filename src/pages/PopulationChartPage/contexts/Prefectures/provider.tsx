import type { PrefecturesContextValue } from "./type.ts";
import { PrefecturesContext } from "./context";
import {
  useGetNamesFromIdsFunc,
  useGetIdsFromNamesFunc,
  usePrefectureData,
} from "./hook.ts";

type PrefecturesProviderProps = {
  children: React.ReactNode;
};
export const PrefecturesProvider: React.FC<PrefecturesProviderProps> = ({
  children,
}) => {
  const { id2Name, name2Id } = usePrefectureData();
  const getNamesFromIdsFunc = useGetNamesFromIdsFunc(id2Name);
  const getIdsFromNamesFunc = useGetIdsFromNamesFunc(name2Id);

  const value: PrefecturesContextValue = {
    getNamesFromIdsFunc,
    getIdsFromNamesFunc,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
