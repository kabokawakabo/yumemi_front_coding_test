import { ErrorBoundary } from "../../util/error/ErrorBoundary";
import { PopulationDataComponents } from "./PopulationDataComponents";
import { PrefectureCheckbox } from "./PrefectureCheckbox";
import { PrefecuterProviders } from "./_contexts/PrefectureProviders";

export const PrefectureDataComponents = () => {
  return (
    <ErrorBoundary>
      <PrefecuterProviders>
        <PrefectureCheckbox />
        <PopulationDataComponents />
      </PrefecuterProviders>
    </ErrorBoundary>
  );
};
