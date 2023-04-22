export const LABELS = ["ラベル1", "ラベル2", "ラベル3"];

const addLabel = (label: string) => [
  ...CheckboxListArgs.selected_labels,
  label,
];
const removeLabel = (label: string) =>
  CheckboxListArgs.selected_labels.filter((d) => d !== label);
export const CheckboxListArgs = {
  labels: [...LABELS],
  selected_labels: [LABELS[1]],
  setSelectedLabels: (label: string, next_value: boolean) => {
    if (next_value) CheckboxListArgs.selected_labels = addLabel(label);
    else CheckboxListArgs.selected_labels = removeLabel(label);
  },
};

export const hasLabel = (labels: string[], label: string) =>
  new Set(labels).has(label);
