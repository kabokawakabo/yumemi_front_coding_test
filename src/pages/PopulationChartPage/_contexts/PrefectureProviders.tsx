import { PrefecturesProvider } from "./Prefectures/provider";
import { PrefectureCheckboxProvider } from "./PrefectureCheckbox/provider";

type PrefectureProvidersProps = {
  children: React.ReactNode;
};
export const PrefecuterProviders: React.FC<PrefectureProvidersProps> = ({
  children,
}) => {
  return (
    <PrefecturesProvider>
      <PrefectureCheckboxProvider>{children}</PrefectureCheckboxProvider>
    </PrefecturesProvider>
  );
};
