import { useSelectedPrefCodes } from "./PrefectureCheckbox/useContext";

import { PopulationCompositionProvider } from "./PopulationComposition/provider";
import { PrefectureColorPickerProvider } from "./PrefectureColorPicker/provider";
import { PopulationLabelProvider } from "./PopulationLabelSelect/provider";
import { SuggestClickCheckbox } from "./SuggestClickCheckbox";

type PopulationProvidersProps = {
  children: React.ReactNode;
};
export const PopulationProviders: React.FC<PopulationProvidersProps> = ({
  children,
}) => {
  const prefCodes = useSelectedPrefCodes();

  return (
    <PopulationLabelProvider>
      <PrefectureColorPickerProvider prefCodes={prefCodes}>
        <PopulationCompositionProvider prefCodes={prefCodes}>
          {prefCodes.length === 0 ? <SuggestClickCheckbox /> : children}
        </PopulationCompositionProvider>
      </PrefectureColorPickerProvider>
    </PopulationLabelProvider>
  );
};
