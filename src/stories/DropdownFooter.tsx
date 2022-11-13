import * as React from "react";
import "./dropdownfooter.css";

export const DropdownFooter: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="dropdown-footer__container">{children}</div>;
};
