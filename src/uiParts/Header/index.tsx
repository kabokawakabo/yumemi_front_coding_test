import style from "./style.module.css";
import { TmpTitle } from "./TmpTitle";

type HeaderProps = {
  title?: string; //テスト用
};
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header title={title} className={style.header + " " + style.header_media}>
      <TmpTitle />
    </header>
  );
};
