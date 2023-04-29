import type { OptionDatum } from "../../../uiParts/Select/type";
import { usePopulationLabels } from "../_contexts/PopulationComposition/useContext";
import {
  useSelectedLabel,
  useSetSelectedLabel,
} from "../_contexts/PopulationLabelSelect/useContext";

export const useSelectedValue = () => {
  return useSelectedLabel() ?? "";
};

export const useOptionData = (): OptionDatum[] => {
  const labels = usePopulationLabels();

  return labels === undefined
    ? []
    : labels.map((label) => {
        return {
          label,
          value: label,
        };
      });
};

export const useOnChange = () => {
  const setLabel = useSetSelectedLabel();
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLabel(value);
  };
};
