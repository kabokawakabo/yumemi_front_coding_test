import { useQuery } from "@tanstack/react-query";

import type { onSuccessFunc } from "./type";
import type { Prefecture } from "../../../../api/RESAS/prefectures";
import queryKeys from "../../../../api/queryKeys";
import { getPrefectures } from "../../../../api/RESAS/prefectures";

export const useGetPrefecturesQuery = (onSuccess: onSuccessFunc) => {
  /// NOTE: mockテスト作成が大変なので返り値なし（別案のfetch側をmockすると useQueryのprovider必須でこれも大変）
  useQuery<Prefecture[]>({
    queryKey: queryKeys.RESAS.prefectures(),
    queryFn: async () => getPrefectures(),
    onSuccess,
    staleTime: Infinity, /// 再度API叩かず、キャッシュから読み出し
  });
};
