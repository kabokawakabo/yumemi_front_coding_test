import type { OptionDatum } from "./type";

export const createOption: React.FC<OptionDatum> = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};
