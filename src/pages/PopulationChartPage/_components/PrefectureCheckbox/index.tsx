import { CheckboxList } from "../../../../uiParts/CheckboxList";
import { useLabels, useSelectedLabels, useSetSelectedLabels } from "./hook";

export const PrefectureCheckbox: React.FC = () => {
  const labels = useLabels();
  const selected_labels = useSelectedLabels();
  const setSelectedLabels = useSetSelectedLabels();

  return (
    <div>
      <CheckboxList
        labels={labels}
        selected_labels={selected_labels}
        setSelectedLabels={setSelectedLabels}
      />
    </div>
  );
};
