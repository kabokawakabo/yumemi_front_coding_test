import { useEffect } from "react";
import type { OptionDatum } from "../../../../uiParts/Select/type";
import { usePopulationLabels } from "../../_contexts/PopulationComposition/useContext";
import {
  useSelectedLabel,
  useSetSelectedLabel,
} from "../../_contexts/PopulationLabelSelect/useContext";

export const useInitializeLabel = () => {
  const labels = usePopulationLabels();
  const setLabel = useSetSelectedLabel();
  const selected_label = useSelectedLabel();
  const isNotSelected = selected_label === undefined;
  useEffect(() => {
    const initialize_label = labels === undefined ? undefined : labels[0];
    if (isNotSelected && initialize_label !== undefined)
      setLabel(initialize_label);
  }, [labels, setLabel, isNotSelected]);
};

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
