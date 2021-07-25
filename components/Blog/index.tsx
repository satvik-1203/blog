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
        ul {
          margin: 1rem 0;
        }
        li {
          list-style: disc;
          list-style-position: inside;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        h2 {
          font-size: 2.2rem;
          font-weight: bold;
          margin: 2.5rem 0;
        }
        p {
          margin: 1rem 0;
        }
        pre {
          overflow-x: scroll;
          background: #1d1d1d;
          padding: 0.6rem 0.6rem;
          border-radius: 0.5rem;
        }
        code {
          background: rgb(255, 255, 255, 0.7);
          border-radius: 0.2rem;
        }
        pre code {
          background: transparent;
          color: white;
        }
      `}</style>
    </>
  );
};

export default index;
