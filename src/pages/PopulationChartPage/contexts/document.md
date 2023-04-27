## context フォルダ概要

| フォルダ名            | 内容                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Prefectures           | RESAS API の「都道府県一覧」データを管理                                                               |
| ----                  | ----                                                                                                   |
| PrefectureCheckbox    | 都道府県 checkbox の check している県の prefCode を保存                                                |
| ----                  | ----                                                                                                   |
| PopulationComposition | 都道府県 checkbox の check している県について、「人口構成」データを RESAS API から取得                 |
| ----                  | ----                                                                                                   |
| PrefectureLabelSelect | RESAS API の「人口構成」データで取得する label について、select で選択された値を保持                   |
| ----                  | ----                                                                                                   |
| PrefectureColorPicker | 都道府県毎、chart 表示の色を保持する（checkbox で初めて check した場合、ランダムにカラーコードを作成） |

## context 依存階層

- Prefectures
  - PrefectureCheckbox
    - PopulationComposition
      - PrefectureLabelSelect
    - PrefectureColorPicker
