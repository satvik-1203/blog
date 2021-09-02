import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen ">
      <SideBar />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
