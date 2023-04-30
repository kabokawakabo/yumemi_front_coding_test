import { ErrorBoundary } from "../../../util/error/ErrorBoundary";
import { MainTitle } from "./MainTitle";
import { PopulationDataComponents } from "../PopulationDataComponents";
import { PrefectureCheckbox } from "../_components/PrefectureCheckbox";
import { PrefecuterProviders } from "../_contexts/PrefectureProviders";
import style from "./style.module.css";

export const PrefectureDataComponents = () => {
  return (
    <main className={style.main_group + " " + style.main_group_media}>
      <ErrorBoundary>
        <PrefecuterProviders>
          <MainTitle />
          <PrefectureCheckbox />
          <PopulationDataComponents />
        </PrefecuterProviders>
      </ErrorBoundary>
    </main>
  );
};
