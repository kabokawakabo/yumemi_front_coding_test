import { Select } from "../../../uiParts/Select";
import {
  useInitializeLabel,
  useOnChange,
  useOptionData,
  useSelectedValue,
} from "./hook";

type PopulationLabelSelectProps = {
  style?: React.CSSProperties;
};
export const PopulationLabelSelect: React.FC<PopulationLabelSelectProps> = ({
  style,
}) => {
  useInitializeLabel();
  const value = useSelectedValue();
  const option_data = useOptionData();
  const onChange = useOnChange();

  return (
    <div style={style}>
      <Select value={value} option_data={option_data} onChange={onChange} />
    </div>
  );
};
