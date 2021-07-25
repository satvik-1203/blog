import React from "react";
import { topicName } from "@/root/interfaces";

import BlogPost from "./BlogPost";
import Link from "next/link";

interface Props {
  topicNames: topicName[];
}

const index: React.FC<Props> = ({ topicNames }) => {
  return (
    <main>
      <header className="flex justify-center max-w-4xl">
        <h1 className="h-32 relative   flex-col font-serif flex  justify-center items-start text-3xl tracking-wide sm:text-5xl ">
          Enjoy the love of code
          <div className="w-16 h-2 absolute  bottom-5  rounded-full bg-gray-700"></div>
        </h1>
      </header>
      <section className="grid mt-[5rem]  gap-y-8 gap-x-8  grid-cols-smCardCol sm:grid-cols-cardCol">
        {topicNames.map(topicName => (
          <Link key={topicName.id} href={topicName.url || "/"}>
            <a>
              <BlogPost topicName={topicName} />
            </a>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default index;
// sm:grid-cols-2
