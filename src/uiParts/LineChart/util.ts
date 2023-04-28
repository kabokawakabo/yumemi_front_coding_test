const US_UNIT_RANK = 3;
const UNIT_RANK = 4;
const UNIT_SUFFIX_LIST = ["", "万", "億", "兆"];

type Unit = {
  value: string;
  suffix: string;
  isLastOrOverSuffix: boolean;
};

export const createUnitList = (label: string) => {
  const len = label.length;
  const unit_list: Unit[] = [];

  for (let i = 0, suf_i = 0; i < len; i += UNIT_RANK, suf_i++) {
    const ed_i = len - i;
    const value = label.substring(ed_i - UNIT_RANK, ed_i);
    const suffix = UNIT_SUFFIX_LIST[suf_i] ?? ""; // 該当する値がない場合単位を加えない

    unit_list.push({
      value,
      suffix,
      isLastOrOverSuffix: suf_i >= UNIT_SUFFIX_LIST.length - 1,
    });
  }

  return unit_list;
};

const isAllZeroStr = (str: string) => str.split("").every((d) => d === "0");

export const addIntRankSuffix = (label_num: number) => {
  const label = label_num + "";
  const unit_list = createUnitList(label);

  let new_label = "";
  for (const { value, suffix, isLastOrOverSuffix } of unit_list) {
    if (isLastOrOverSuffix) {
      /// NOTE: 1 0000万（億単位なし） の場合、0000部分を加える。
      new_label = value + suffix + new_label;
    } else if (!isAllZeroStr(value)) {
      /// NOTE: 0100 の場合、 Number関数で 100に変更。
      new_label = Number(value) + suffix + new_label;
    }
  }

  return new_label;
};

export const addIntRankSuffixWithSignificantDigit = (
  label_num: number,
  tol_digit: number
) => {
  const label = label_num + "";
  const unit_list = createUnitList(label);
  const reverse_unit_list = [...unit_list].reverse();

  let digit_count = 0;
  let new_label = "";
  let int_suffix = "";
  let hasNotDecimalPoint = true;
  for (const i of reverse_unit_list.keys()) {
    const { value, suffix, isLastOrOverSuffix } = reverse_unit_list[i];
    // NOTE: 初回 or 単位がつくまでは加え続ける
    if (i === 0 || isLastOrOverSuffix) {
      new_label += value;
      digit_count = value.length;
      int_suffix = suffix;
      continue;
    }

    if (digit_count >= tol_digit) break;

    // 単位以降で桁が足りない場合は追記
    if (hasNotDecimalPoint) {
      new_label += ".";
      hasNotDecimalPoint = false;
    }
    for (const v of value) {
      new_label += v;
      digit_count++;
      if (digit_count >= tol_digit) break;
    }
  }

  return new_label + int_suffix;
};

export const addIntUSRankSuffix = (label_num: number) => {
  const label = label_num + "";

  let new_label = "";
  for (let i = 0; i < label.length; i += US_UNIT_RANK) {
    const ed_i = label.length - i;
    const value = label.substring(ed_i - US_UNIT_RANK, ed_i);
    if (i !== 0) new_label = value + "," + new_label;
    else new_label = value;
  }

  return new_label;
};
