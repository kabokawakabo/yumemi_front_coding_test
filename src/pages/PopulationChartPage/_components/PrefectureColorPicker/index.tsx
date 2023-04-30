import { LegendColorPickerList } from "../../../../uiParts/LegendColorPickerList";
import { useLegendData, useSetColorCodeForLabelFunc } from "./hook";

export const PrefectureColorPicker: React.FC = () => {
  const legend_data = useLegendData();
  const setColorCodeForLabel = useSetColorCodeForLabelFunc();

  return (
    <div>
      <LegendColorPickerList
        legendData={legend_data}
        setColorCodeForLabel={setColorCodeForLabel}
      />
    </div>
  );
};
