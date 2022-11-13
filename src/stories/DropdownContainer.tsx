import * as React from "react";
import "./dropdowncontainer.css";

interface DropdownContainerProps {
  onClose: () => void;
}

export const DropdownContainer: React.FC<
  React.PropsWithChildren<DropdownContainerProps>
> = ({ onClose, children }) => {
  return (
    <div className="container" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      ;
    </div>
  );
};
