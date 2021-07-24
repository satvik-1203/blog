import React from "react";

interface Props {
  content: string;
  data: any; // for now
}

const index: React.FC<Props> = ({ data, content }) => {
  return (
    <>
      <div
        className={` mt-20 focus:outline-none  py-10 px-5 sm:px-10 sm:w-3/4  `}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <style jsx global>{`
        div > * {
          font-size: 1.1rem;
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 3rem 0;
        }
        p {
          margin: 1rem 0;
        }
        pre {
          width: fit-content;
          background: black;
          padding: 0.5rem 0.6rem;
          border-radius: 0.5rem;
        }
        code {
          background: rgb(255, 255, 255, 0.7);
          border-radius: 0.2rem;
        }
        pre code {
          background: black;
          color: white;
        }
      `}</style>
    </>
  );
};

export default index;
