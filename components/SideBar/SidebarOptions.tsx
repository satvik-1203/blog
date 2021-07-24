import React from "react";
import { options } from "../../misc/sideBarOptions";
import Link from "next/link";

const SidebarOptions = () => {
  return (
    <div className="flex justify-center ">
      {options.map(option => (
        <Link key={option.id} href={option.path}>
          <a>
            <div className="transition py-2 rounded-lg px-2 cursor-pointer hover:shadow-sideBarOption hover:bg-gray-100">
              {option.icon}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;
