import type { ContextValue } from "./type.ts";
import { PrefecturesContext } from "./context";
import {
  useGetNameFromIdFunc,
  useGetIdFromNameFunc,
  usePrefectureData,
} from "./hook.ts";

type PrefecturesProviderProps = {
  children: React.ReactNode;
};
export const PrefecturesProvider: React.FC<PrefecturesProviderProps> = ({
  children,
}) => {
  const { id2Name, name2Id } = usePrefectureData();
  const getNameFromIdFunc = useGetNameFromIdFunc(id2Name);
  const getIdFromNameFunc = useGetIdFromNameFunc(name2Id);

  const value: ContextValue = {
    getNameFromIdFunc,
    getIdFromNameFunc,
  };

  return (
    <PrefecturesContext.Provider value={value}>
      {children}
    </PrefecturesContext.Provider>
  );
};
