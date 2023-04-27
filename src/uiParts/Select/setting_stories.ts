import type { SelectProps } from "./type";

export const valueObj = {
  defaultValue: "",
};

export const SelectArgs: SelectProps = {
  option_data: [
    { label: "ラベル1", value: "label1" },
    { label: "ラベル2", value: "ラベル2" },
    { label: "3", value: "3" },
  ],
  value: valueObj.defaultValue,
  onChange: (e) => {
    //// NOTE: onChangeで該当するvalueに変更したかテストする際に使用（storybook画面ではonChangeによる表示変更はしないっぽい）
    const value = e.target.value;
    valueObj.defaultValue = value;
  },

  label: "selectラベル",
  isOtherLineLabel: true,
};
