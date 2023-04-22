import { Checkbox } from "../Checkbox";
import style from "./style.module.css";

type CheckboxListProps = {
  labels: string[];
  selected_labels: string[];
  setSelectedLabels: (label: string, next_value: boolean) => void;
};

export const CheckboxList: React.FC<CheckboxListProps> = ({
  labels,
  selected_labels,
  setSelectedLabels,
}) => {
  const selected_set = new Set(selected_labels);
  const createSetValue = (label: string) => {
    return (next_value: boolean) => {
      setSelectedLabels(label, next_value);
    };
  };

  return (
    <>
      {labels.map((label) => {
        const value = selected_set.has(label);
        const setValue = createSetValue(label);

        return (
          <Checkbox
            className={style.checkbox}
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
