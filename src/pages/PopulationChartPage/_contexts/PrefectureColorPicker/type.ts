export type PrefectureColorPickerObj = {
  [key: number]: string;
};

export type getColorCodeFunc = (prefCode: number) => string | undefined;
export type setColorCodeFunc = (prefCode: number, color_code: string) => void;
export type ContextValue = {
  getColorCodeFunc: getColorCodeFunc;
  setColorCodeFunc: setColorCodeFunc;
};
