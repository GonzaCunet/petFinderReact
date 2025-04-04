import css from "./button.module.css";
type buttonProps = {
  buttonColor?: any;
  type?: any;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  handleClick?: () => void;
};
export const ButtonEl = ({
  children,
  handleClick,
  type,
  buttonColor,
  width,
  height,
}: buttonProps) => {
  const typeButton = type ? type : "";
  return (
    <button
      className={css.root}
      onClick={handleClick}
      type={typeButton}
      style={{ backgroundColor: buttonColor, width: width, height: height }}
    >
      {children}
    </button>
  );
};
