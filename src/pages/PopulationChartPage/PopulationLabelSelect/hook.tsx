import type { OptionDatum } from "../../../uiParts/Select/type";
import {
  usePoupulationDataLabels,
  useSelectedLabel,
  useSetLabel,
} from "./useContext";

export const useSelectedValue = () => {
  return useSelectedLabel() ?? "";
};

export const useOptionData = (): OptionDatum[] => {
  const labels = usePoupulationDataLabels();

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
  const setLabel = useSetLabel();
  return (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLabel(value);
  };
};
