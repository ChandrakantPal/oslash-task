import * as React from "react";
import classNames from "classnames";
import "./avatar.css";

interface AvatarProp {
  variant?: "regular" | "square";
  size?: "small" | "medium" | "large";
}

export const Avatar: React.FC<React.PropsWithChildren<AvatarProp>> = ({
  variant = "regular",
  size = "medium",
  children,
}) => {
  return (
    <div
      className={classNames("avatar__container", {
        avatar__size__small: size === "small",
        avatar__size__large: size === "large",
        avatar__variant__square: variant === "square",
      })}
    >
      {children}
    </div>
  );
};
