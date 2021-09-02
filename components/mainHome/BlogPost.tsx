import React from "react";
import { topicName } from "interfaces";

interface Props {
  topicName: topicName;
}

const BlogPost: React.FC<Props> = ({ topicName }) => {
  return (
    <div className="p-4  relative cursor-pointer  h-[10rem] md:h-[11.5rem] lg:h-[13rem] flex flex-col justify-between  transition-all shadow-md hover:shadow-lg transform hover:-rotate-6 rounded-lg bg-card ">
      <div className="text-base font-bold"> {topicName.name}</div>
      <div className="text-xs ">{topicName.language}</div>
    </div>
  );
};

export default BlogPost;
