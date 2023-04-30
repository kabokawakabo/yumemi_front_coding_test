import { Select } from "../../../uiParts/Select";
import {
  useInitializeLabel,
  useOnChange,
  useOptionData,
  useSelectedValue,
} from "./hook";

export const PopulationLabelSelect: React.FC = () => {
  useInitializeLabel();
  const value = useSelectedValue();
  const option_data = useOptionData();
  const onChange = useOnChange();

  return (
    <div>
      <Select value={value} option_data={option_data} onChange={onChange} />
    </div>
  );
};
