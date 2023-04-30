import style from "./style.module.css";

export const SuggestClickCheckbox: React.FC = () => {
  return (
    <h4 className={style.suggest_click}>
      ↑ グラフに表示する都道府県を選択してください
    </h4>
  );
};
