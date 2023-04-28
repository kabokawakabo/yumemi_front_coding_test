/**
 *
 * @param label
 * @param zero_rank
 * @param suffix
 * @param forceFormat - 下の値が0ではない場合でも変更する
 * @returns [boolean, string] - boolean(変更が発生したか)
 */
const convertTextSuffix = (
  label: string,
  zero_rank: number,
  suffix: string,
  forceFormat?: boolean
): [boolean, string] => {
  const not_convert: [boolean, string] = [false, label];
  if (label.length < zero_rank + 1) return not_convert;

  const st_i = label.length - zero_rank;
  const last_nums = label.substring(st_i);
  const allZero = last_nums.split("").every((d) => d === "0");

  if (forceFormat || allZero) return [true, label.substring(0, st_i) + suffix];
  return not_convert;
};

export const jaTickFormatter = (num_label: number, forceFormat?: boolean) => {
  const label = num_label + "";
  const unit_rank = 4;

  const [overHunMill, hundred_mill_label] = convertTextSuffix(
    label,
    unit_rank * 2,
    "億",
    forceFormat
  );
  if (overHunMill) return hundred_mill_label;

  const [, ten_thousand_label] = convertTextSuffix(
    label,
    unit_rank,
    "万",
    forceFormat
  );
  return ten_thousand_label; /// NOTE: 万単位に足りない場合、関数内部では変更しないのでそのまま返せる
};

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

export const addRankSuffix = (label_num: number) => {
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

export const addRankSuffixWithSignificantDigit = (
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
