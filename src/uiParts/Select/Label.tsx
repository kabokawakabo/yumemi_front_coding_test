import type { LabelProps } from "./type";

/**
 * label propがない場合、labelにラップせずにchildrenを返す
 */
type LineLabelProps = {
  children: React.ReactNode;
} & LabelProps;
export const LineLabel: React.FC<LineLabelProps> = ({
  label,
  isOtherLineLabel,
  children,
}) => {
  if (label === undefined) return <>{children}</>;

  const BrOrUndefined = isOtherLineLabel ? <br /> : undefined;
  return (
    <label>
      {label}
      {BrOrUndefined}

      {children}
    </label>
  );
};
