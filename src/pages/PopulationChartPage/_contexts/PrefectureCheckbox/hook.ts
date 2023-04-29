import { useState } from "react";

export const useSelectedIds = () => {
  const [selected_ids, setSelectedIds] = useState<number[]>([]);
  const addPrefCode = (prefCode: number) => {
    setSelectedIds([...selected_ids, prefCode]);
  };
  const removePrefCodeFromIndex = (index: number) => {
    const new_ids = selected_ids.filter((_, i) => i !== index);
    setSelectedIds(new_ids);
  };

  const addOrRemovePrefCode = (prefCode: number) => {
    const index = selected_ids.findIndex((d) => prefCode === d);
    if (index === -1) addPrefCode(prefCode);
    else removePrefCodeFromIndex(index);
  };

  return {
    selected_ids,
    addOrRemovePrefCode,
  };
};
