import React from "react";
import SidebarOptions from "./SidebarOptions";

const SideBar = () => {
  return (
    <aside className="absolute pt-32 px-2 flex flex-col items-center inset-0">
      <SidebarOptions />
    </aside>
  );
};

export default SideBar;
