import Image from "next/image";
import React from "react";
import { ToolsObj } from "./ToolsBank";

const ToolItem: React.FC<ToolsObj> = ({ id, name, docUrl, imgUrl }) => {
  return (
    <li className="tools__item">
      <Image src={imgUrl} width={40} height={40} alt={name} />
    </li>
  );
};
export default ToolItem;
