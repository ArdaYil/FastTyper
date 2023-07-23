import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, type = "button", className, onClick }: Props) => {
  const theClass = className != undefined ? "btn " + className : "btn";

  return (
    <button onClick={onClick} className={theClass} type={type}>
      {children}
    </button>
  );
};

export default Button;
