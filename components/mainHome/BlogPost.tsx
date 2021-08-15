import React from "react";
import { topicName } from "interfaces";

interface Props {
  topicName: topicName;
}

const BlogPost: React.FC<Props> = ({ topicName }) => {
  return (
    <div className="p-4  relative cursor-pointer  h-[11rem] flex flex-col justify-between  transition-all shadow-md hover:shadow-lg transform hover:-translate-y-3 rounded-lg bg-card ">
      <div className="text-lg font-bold"> {topicName.name}</div>
      <div className="text-sm font-mono">{topicName.language}</div>
    </div>
  );
};

export default BlogPost;
