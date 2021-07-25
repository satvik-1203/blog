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
          margin: 1rem 0;
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
          padding: 0.9rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
        }
        code {
          background: rgb(255, 255, 255, 0.7);
          border-radius: 0.2rem;
        }
        pre code {
          background: transparent;
          color: white;
        }
        blockquote {
          border-radius: 0.4rem;

          padding-left: 0.6rem;
          background-color: white;
        }
        blockquote p {
          padding: 0.3rem 0.4rem;
          background-color: rgba(167, 167, 167, 0.6);
        }
      `}</style>
    </>
  );
};

export default index;
