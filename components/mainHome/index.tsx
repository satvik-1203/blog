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
      <header>
        <h1 className="font-serif py-[4rem] text-center text-2xl px-5 md:text-3xl lg:text-5xl 2xl:text-6xl">
          {"((:"} Everything I find amazing can be found here {":))"}
        </h1>
      </header>
      <section className=" pb-[5rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-5">
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
