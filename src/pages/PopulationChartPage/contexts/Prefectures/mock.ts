import { useGetPrefecturesQuery } from "./query";
import type { Prefecture } from "../../../../api/RESAS/prefectures";
import type { Id2NameObj, Name2IdObj, onSuccessFunc } from "./type";

export const createIdNameObj = (data: Prefecture[]) => {
  const id2Name: Id2NameObj = {};
  const name2Id: Name2IdObj = {};
  for (const { prefCode, prefName } of data) {
    id2Name[prefCode] = prefName;
    name2Id[prefName] = prefCode;
  }

  return {
    id2Name,
    name2Id,
  };
};

const createMockQueryFunc = (mock_data: Prefecture[]) => {
  /// NOTE: 通常queryのSuccess時に呼ぶので無限ループにならない。モックでは起きるので書き込み1回に制限
  let isFirstUpdate = true;
  return (onSuccess: onSuccessFunc) => {
    if (!isFirstUpdate) return;

    onSuccess(mock_data);
    isFirstUpdate = false;
  };
};

/**
 * NOTE: 関数呼び出しと同時に、テストファイルに `jest.mock(Prefectures/query.tsのパス)` を記述する必要あり
 * （同じファイルの方が相対パスがわかりやすいが、モック成立するためには別ファイルのimportが必須。他の方法があるかもしれない。）
 */
export const createMockQuery = (mock_data: Prefecture[]) => {
  const mock = useGetPrefecturesQuery as jest.MockedFunction<
    typeof useGetPrefecturesQuery
  >;
  mock.mockImplementation(createMockQueryFunc(mock_data));
};
