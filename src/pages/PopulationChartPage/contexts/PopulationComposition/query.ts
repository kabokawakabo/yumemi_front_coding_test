import { useQueries } from "@tanstack/react-query";

import type { onSuccessFunc } from "./type";
import { getPopulationPerYear } from "../../../../api/RESAS/populationComposition";
import queryKeys from "../../../../api/queryKeys";

export const useGetPopulationPerYear = (
  prefCodes: number[],
  onSuccessFunc: onSuccessFunc
) => {
  useQueries({
    queries: prefCodes.map((prefCode) => {
      const queryKey = queryKeys.RESAS.populationComposition({ prefCode });
      const queryFn = async () => getPopulationPerYear({ prefCode });
      const onSuccess = onSuccessFunc(prefCode);
      return {
        queryKey,
        queryFn,
        onSuccess,
        staleTime: Infinity, /// 再度API叩かず、キャッシュから読み出し
      };
    }),
  });
};
