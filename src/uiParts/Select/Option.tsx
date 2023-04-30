import type { OptionDatum } from "./type";

export const createOption: React.FC<OptionDatum> = ({ label, value }) => {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
};
