import React from "react";
import { topicName } from "interfaces";

interface Props {
  topicName: topicName;
}

const BlogPost: React.FC<Props> = ({ topicName }) => {
  return (
    <div className="p-4  cursor-pointer  h-[11rem]  transition-all shadow-md hover:shadow-lg transform hover:-translate-y-3 rounded-lg bg-card ">
      {topicName.name}
    </div>
  );
};

export default BlogPost;
