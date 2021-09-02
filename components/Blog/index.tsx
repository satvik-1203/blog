import React from "react";

interface Props {
  content: string;
  data: any; // for now
}

const index: React.FC<Props> = ({ data, content }) => {
  return (
    <>
      <div
        className={` blog mt-16 mx-auto focus:outline-none  py-10 px-5 sm:px-10 sm:w-3/4  `}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

export default index;
