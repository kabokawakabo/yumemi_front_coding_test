type CheckboxProps = {
  className?: string;
  label: string;
  value: boolean;
  setValue: (next_value: boolean) => void;
};
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  value,
  setValue,
}) => {
  const onChange = () => {
    setValue(!value);
  };

  return (
    <label className={className}>
      <input type="checkbox" checked={value} onChange={onChange} /> {label}
    </label>
  );
};
