type CheckboxProps = {
  label: string;
  value: boolean;
  setValue: (b: boolean) => void;
};
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  setValue,
}) => {
  const onChange = () => {
    setValue(!value);
  };

  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} /> {label}
    </label>
  );
};
