## context フォルダ概要

| フォルダ名            | 内容                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Prefectures           | RESAS API の「都道府県一覧」データを管理                                                               |
| PrefectureCheckbox    | 都道府県 checkbox の check している県の prefCode を保存                                                |
| PopulationComposition | 都道府県 checkbox の check している県について、「人口構成」データを RESAS API から取得                 |
| PrefectureLabelSelect | RESAS API の「人口構成」データで取得する label について、select で選択された値を保持                   |
| PrefectureColorPicker | 都道府県毎、chart 表示の色を保持する（checkbox で初めて check した場合、ランダムにカラーコードを作成） |

## context 依存階層

- Prefectures
  - ＊ PrefectureCheckbox
    - PopulationComposition
      - ＊ PrefectureLabelSelect
    - PrefectureColorPicker

(＊： Provider 初期設定自体は依存していないが、set 関数によって保存する値は親 provider に依存する状態)

## 階層内部ファイル

| ファイル名 | 内容                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| context    | createContext の返り値(useContext に利用など)                                                               |
| hook       | provider ファイルで value に入れる値、関数を作成                                                            |
| mock       | api で取得するデータ（or そのモックデータ）から　 context 内部の state を作る関数。query 関数のモックを作る |
| provider   | context の provider                                                                                         |
| query      | api を叩く部分を独立させたもの                                                                              |
| type       | フォルダ内部の汎用的なタイプをまとめる場所                                                                  |
