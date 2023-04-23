import { LegendColorPicker } from "../LegendColorPicker";
import style from "./style.module.css";
import { LegendInfo } from "./type";

type LegendColorPickerListProps = {
  legendData: LegendInfo[];
  setColorCodeForLabel: (label: string, color_code: string) => void;
};
export const LegendColorPickerList: React.FC<LegendColorPickerListProps> = ({
  legendData,
  setColorCodeForLabel,
}) => {
  const createSetValue = (label: string) => {
    return (color_code: string) => {
      setColorCodeForLabel(label, color_code);
    };
  };

  return (
    <>
      {legendData.map(({ label, value }) => {
        const setValue = createSetValue(label);

        return (
          <LegendColorPicker
            className={style.legend_color_picker}
            key={label}
            label={label}
            value={value}
            setValue={setValue}
          />
        );
      })}
    </>
  );
};
