import css from "./button.module.css";
type buttonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};
export const ButtonEl = ({ children, handleClick }: buttonProps) => {
  return (
    <button className={css.root} onClick={handleClick}>
      {children}
    </button>
  );
};
