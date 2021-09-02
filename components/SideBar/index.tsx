import React from "react";
import SidebarOptions from "./SidebarOptions";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <div className="w-[5rem] relative bg-white shadow-2xl">
      <div className="absolute translate-x-1/2 pt-[10rem] transform  left-1/2 right-1/2 ">
        <SidebarOptions />
      </div>
    </div>
  );
};

export default SideBar;
