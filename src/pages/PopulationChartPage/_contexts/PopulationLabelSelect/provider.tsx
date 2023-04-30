import type { ContextValue } from "./type";
import { PopulationLabelContext } from "./context";
import { useSelectedLabel } from "./hook";

type PopulationLabelProviderProps = {
  children: React.ReactNode;
};
export const PopulationLabelProvider: React.FC<
  PopulationLabelProviderProps
> = ({ children }) => {
  const [label, setLabel] = useSelectedLabel();

  const value: ContextValue = {
    label,
    setLabel,
  };

  return (
    <PopulationLabelContext.Provider value={value}>
      {children}
    </PopulationLabelContext.Provider>
  );
};
