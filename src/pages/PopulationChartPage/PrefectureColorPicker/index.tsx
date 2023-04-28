import { LegendColorPickerList } from "../../../uiParts/LegendColorPickerList";
import { useLegendData, useSetColorCodeForLabelFunc } from "./hook";

type PrefectureColorPickerProps = {
  style?: React.CSSProperties;
};
export const PrefectureColorPicker: React.FC<PrefectureColorPickerProps> = ({
  style,
}) => {
  const legend_data = useLegendData();
  const setColorCodeForLabel = useSetColorCodeForLabelFunc();

  return (
    <div style={style}>
      <LegendColorPickerList
        legendData={legend_data}
        setColorCodeForLabel={setColorCodeForLabel}
      />
    </div>
  );
};
