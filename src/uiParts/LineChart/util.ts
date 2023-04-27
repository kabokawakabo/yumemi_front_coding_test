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
