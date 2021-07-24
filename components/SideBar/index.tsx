import React from "react";
import SidebarOptions from "./SidebarOptions";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <div
      className="w-[5rem]  bg-white  h-screen z-50  pt-32 rounded-tr-md rounded-br-md "
      style={{ boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <SidebarOptions />
    </div>
  );
};

export default SideBar;
