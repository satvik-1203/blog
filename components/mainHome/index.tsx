import React from "react";
import { topicName } from "@/root/interfaces";

import BlogPost from "./BlogPost";
import Link from "next/link";

interface Props {
  topicNames: topicName[];
}

const index: React.FC<Props> = ({ topicNames }) => {
  return (
    <main className="py-[5rem]">
      <header>
        <h1 className="font-serif py-[3rem] md:py-[5rem]  text-center text-2xl px-5 md:text-3xl lg:text-5xl 2xl:text-6xl">
          {"((:"} Everything I find amazing can be found here {":))"}
        </h1>
      </header>
      <section className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-5 md:px-8 lg:px-12">
        {topicNames.map((topicName, index) => (
          <Link key={index} href={topicName.url || "/"}>
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
