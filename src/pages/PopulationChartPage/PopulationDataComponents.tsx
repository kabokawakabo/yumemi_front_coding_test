import { ErrorBoundary } from "../../util/error/ErrorBoundary";
import { PopulationProviders } from "./_contexts/PopulationProviders";
import { PopulationLabelSelect } from "./_components/PopulationLabelSelect";
import { PopulationLineChart } from "./_components/PopulationLineChart";
import { PrefectureColorPicker } from "./_components/PrefectureColorPicker";
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
