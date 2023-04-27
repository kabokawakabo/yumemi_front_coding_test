import { createOption } from "./Option";
import type { SelectProps } from "./type";
import style from "./style.module.css";
import { LineLabel } from "./Label";

export const Select: React.FC<SelectProps> = ({
  value,
  option_data,
  onChange,

  label,
  isOtherLineLabel,
}) => {
  const options = option_data.map((d) => createOption(d));
  return (
    <LineLabel label={label} isOtherLineLabel={isOtherLineLabel}>
      <select className={style.select} value={value} onChange={onChange}>
        {options}
      </select>
    </LineLabel>
  );
};
