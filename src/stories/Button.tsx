import classNames from "classnames";
import * as React from "react";
import "./button.css";

export interface ButtonProps {
  onClick: () => void;
  variant?: "dark" | "light";
  borderRadius?: "rounded" | "square" | "left-rounded" | "right-rounded";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  borderRadius = "rounded",
  variant = "light",
  leftIcon,
  rightIcon,
  text,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", {
        dark: variant === "dark",
        square: borderRadius === "square",
        "left-rounded": borderRadius === "left-rounded",
        "right-rounded": borderRadius === "right-rounded",
        "icon-left-spacing": leftIcon !== undefined,
        "icon-right-spacing": rightIcon !== undefined,
      })}
    >
      {leftIcon}
      <span>{text}</span>
      {rightIcon}
    </button>
  );
};
