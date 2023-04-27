export type OptionDatum = {
  value: string;
  label: string;
};

export type LabelProps = {
  label?: string;
  isOtherLineLabel?: boolean;
};

export type SelectProps = {
  value: string;
  option_data: OptionDatum[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} & LabelProps;
