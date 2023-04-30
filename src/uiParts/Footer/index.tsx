import { CreditRESAS } from "../_credits/RESAS";
import style from "./style.module.css";

type Props = {
  title?: string; /// test用に実行
};
export const Footer: React.FC<Props> = ({ title }) => {
  return (
    <footer title={title} className={style.footer + " " + style.footer_media}>
      <CreditRESAS />
    </footer>
  );
};
