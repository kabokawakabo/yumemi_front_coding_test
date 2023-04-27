import { validateInPicker } from "../../util/colorCode";

type LegendColorPickerProps = {
  label: string;
  value: string;
  setValue: (new_value: string) => void;
  className?: string;
  style?: React.CSSProperties;
};
export const LegendColorPicker: React.FC<LegendColorPickerProps> = ({
  label,
  value,
  setValue,
  className,
  style,
}) => {
  validateInPicker(value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <label className={className} style={style}>
      <input type="color" value={value} onChange={onChange} /> {label}
    </label>
  );
};
