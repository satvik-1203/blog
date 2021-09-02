import React from "react";
import SidebarOptions from "./SidebarOptions";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <>
      <div className="fixed px-5 z-10 mb-4 w-screen py-2 top-0 left-0 right-0 bg-lightWhite  shadow-2xl">
        <SidebarOptions />
      </div>
    </>
  );
};

export default SideBar;
