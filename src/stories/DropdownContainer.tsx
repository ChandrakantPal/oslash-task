import * as React from "react";
import "./dropdowncontainer.css";

export interface DropdownContainerProps extends React.PropsWithChildren {
  onClose: () => void;
}

export const DropdownContainer: React.FC<DropdownContainerProps> = ({
  onClose,
  children,
}) => {
  return (
    <div className="container" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
