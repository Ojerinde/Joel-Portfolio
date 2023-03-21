import React, { ReactNode } from "react";
import Header from "../header";

interface LayoutsProps {
  children?: ReactNode;
}

const Layouts: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};
export default Layouts;
