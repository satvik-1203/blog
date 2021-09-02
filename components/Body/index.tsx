import React from "react";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Index;
