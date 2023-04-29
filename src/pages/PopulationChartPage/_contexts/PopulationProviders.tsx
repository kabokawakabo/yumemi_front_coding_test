import { useSelectedPrefCodes } from "./PrefectureCheckbox/useContext";

import { PopulationCompositionProvider } from "./PopulationComposition/provider";
import { PrefectureColorPickerProvider } from "./PrefectureColorPicker/provider";
import { PopulationLabelProvider } from "./PopulationLabelSelect/provider";

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
          {children}
        </PopulationCompositionProvider>
      </PrefectureColorPickerProvider>
    </PopulationLabelProvider>
  );
};
