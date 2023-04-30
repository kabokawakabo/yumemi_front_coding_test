import { useState } from "react";

export const useSelectedLabel = () => {
  return useState<string | undefined>(undefined);
};
