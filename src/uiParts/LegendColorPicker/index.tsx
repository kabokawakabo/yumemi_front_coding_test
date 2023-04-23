type LegendColorPickerProps = {
  label: string;
  value: string;
  setValue: (new_value: string) => void;
  className?: string;
  style?: React.CSSProperties;
};
export const LegendColorPicker: React.FC<LegendColorPickerProps> = ({
  label,
  value, // #f00 だとダメだった
  setValue,
  className,
  style,
}) => {
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
