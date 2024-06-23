import React from "react";
import { ReactNode } from "react";

interface ButtonSettings {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  outline?: boolean;
  children?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  color = "primary",
  children = "Button",
  onClick,
  outline = false,
  type = "button",
}: ButtonSettings) => {
  var buttonOutline = "";
  if (outline == true && color != "link") {
    buttonOutline = "outline-";
  }

  return (
    <button
      className={"btn btn-" + buttonOutline + color}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

// const Button = ({ onClickHandler, value, title }) => {
//   return (
//     <button onClick={onClickHandler} value={value} className="btns">
//       {title}
//     </button>
//   );
// };

// export default Button;