import { ErrorBoundary } from "../../util/error/ErrorBoundary";
import { PopulationProviders } from "./_contexts/PopulationProviders";
import { PopulationLabelSelect } from "./PopulationLabelSelect";
import { PopulationLineChart } from "./PopulationLineChart";
import { PrefectureColorPicker } from "./PrefectureColorPicker";

export const PopulationDataComponents: React.FC = () => {
  return (
    <ErrorBoundary>
      <PopulationProviders>
        <PopulationLabelSelect />
        <PopulationLineChart />
        <PrefectureColorPicker />
      </PopulationProviders>
    </ErrorBoundary>
  );
};
