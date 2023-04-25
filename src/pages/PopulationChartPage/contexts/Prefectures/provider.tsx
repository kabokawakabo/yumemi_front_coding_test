import type { PrefecturesContextValue } from "./type.ts";
import { PrefecturesContext } from "./context";
import {
  useGetNamesFromIds,
  useGetIdsFromNames,
  usePrefectureData,
} from "./hook.ts";

type PrefecturesProviderProps = {
  children: React.ReactNode;
};
export const PrefecturesProvider: React.FC<PrefecturesProviderProps> = ({
  children,
}) => {
  const { id2Name, name2Id } = usePrefectureData();
  const getNamesFromIds = useGetNamesFromIds(id2Name);
  const getIdsFromNames = useGetIdsFromNames(name2Id);

  const value: PrefecturesContextValue = {
    getNamesFromIds,
    getIdsFromNames,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
