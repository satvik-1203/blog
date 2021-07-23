import React from "react";
import SideBar from "./SideBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="grid  grid-cols-body">
      <div
        className="  overflow-hidden rounded-tr-sm rounded-br-md  h-screen  relative"
        style={{ boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.3)" }}
      >
        <SideBar />
      </div>
      <div className="  min-h-screen bg-gray-200">{children}</div>
    </div>
  );
};

export default Layout;
