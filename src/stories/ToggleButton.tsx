import classNames from "classnames";
import * as React from "react";
import "./togglebutton.css";

interface ToggleButtonProps {
  value: boolean;
  toggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  toggle,
}) => {
  return (
    <div
      onClick={toggle}
      className={classNames("toggle", { toggle__checked: value })}
    >
      <div className="toggle__container">
        <div className="toggle__on"></div>
        <div className="toggle__off"></div>
      </div>
      <div className="toggle__circle"></div>
      <input
        className="toggle__input"
        type="checkbox"
        aria-label="Toggle Button"
      />
    </div>
  );
};
