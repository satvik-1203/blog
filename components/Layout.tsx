import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen flex   bg-lightWhite">
      <SideBar />
      <Body>{children}</Body>
    </div>
  );
};

export default Layout;
