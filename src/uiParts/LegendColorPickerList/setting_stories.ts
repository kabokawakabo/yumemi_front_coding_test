const findLabelIndex = (label: string) =>
  LegendColorPickerArg.legendData.findIndex((elem) => elem.label === label);

export const LegendColorPickerArg = {
  legendData: [
    { label: "ラベル1", value: "#ff0000" },
    { label: "ラベル2", value: "#00ff00" },
    { label: "ラベル3", value: "#0000ff" },
  ],
  setColorCodeForLabel: (label: string, color_code: string) => {
    const index = findLabelIndex(label);
    if (index === -1) return;

    LegendColorPickerArg.legendData[index].value = color_code;
  },
};
