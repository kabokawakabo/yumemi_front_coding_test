import { CheckboxList } from "../../../uiParts/CheckboxList";
import { useLabels, useSelectedLabels, useSetSelectedLabels } from "./hook";

type PrefectureCheckboxProps = {
  style?: React.CSSProperties;
};
export const PrefectureCheckbox: React.FC<PrefectureCheckboxProps> = ({
  style,
}) => {
  const labels = useLabels();
  const selected_labels = useSelectedLabels();
  const setSelectedLabels = useSetSelectedLabels();

  return (
    <div style={style}>
      <CheckboxList
        labels={labels}
        selected_labels={selected_labels}
        setSelectedLabels={setSelectedLabels}
      />
    </div>
  );
};
