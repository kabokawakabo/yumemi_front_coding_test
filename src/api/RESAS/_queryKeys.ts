import { getPopulationPerYearProps } from "./populationComposition";

const queryKeys = {
  prefectures: () => ["prefectures"],
  populationComposition: (props: getPopulationPerYearProps) => [
    "populationComposition",
    props.prefCode,
    props.cityCode,
    props.addArea,
  ],
};

export default queryKeys;
