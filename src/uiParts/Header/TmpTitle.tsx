import style from "./style.module.css";

/// ヘッダーは具体的ではないので仮タイトルを配置
export const TmpTitle = () => {
  return <div className={style.tmp_header_title}>Title</div>;
};
