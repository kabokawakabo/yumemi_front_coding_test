import { useContext } from "react";
import { PrefectureCheckboxContext } from "./PrefectureCheckbox/context";
import { PopulationCompositionProvider } from "./PopulationComposition/provider";
import { PrefectureColorPickerProvider } from "./PrefectureColorPicker/provider";
import { PopulationLabelProvider } from "./PopulationLabelSelect/provider";

type PopulationProvidersProps = {
  children: React.ReactNode;
};
export const PopulationProviders: React.FC<PopulationProvidersProps> = ({
  children,
}) => {
  const { selected_ids } = useContext(PrefectureCheckboxContext);

  return (
    <PopulationLabelProvider>
      <PrefectureColorPickerProvider prefCodes={selected_ids}>
        <PopulationCompositionProvider prefCodes={selected_ids}>
          {children}
        </PopulationCompositionProvider>
      </PrefectureColorPickerProvider>
    </PopulationLabelProvider>
  );
};
