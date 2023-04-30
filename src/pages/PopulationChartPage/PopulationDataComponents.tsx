import { ErrorBoundary } from "../../util/error/ErrorBoundary";
import { PopulationProviders } from "./_contexts/PopulationProviders";
import { PopulationLabelSelect } from "./PopulationLabelSelect";
import { PopulationLineChart } from "./PopulationLineChart";
import { PrefectureColorPicker } from "./PrefectureColorPicker";
import style from "./style.module.css";

export const PopulationDataComponents: React.FC = () => {
  return (
    <section className={style.population_data_group}>
      <ErrorBoundary>
        <PopulationProviders>
          <PopulationLabelSelect />
          <PopulationLineChart />
          <PrefectureColorPicker />
        </PopulationProviders>
      </ErrorBoundary>
    </section>
  );
};
