import React from "react";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-y-scroll px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
      {children}
    </div>
  );
};

export default index;
