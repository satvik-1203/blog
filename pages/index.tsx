import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import fs from "fs";
import MainHome from "../components/mainHome/index";
import { topicName } from "interfaces";

export default function Home({
  topicNames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Starter page for the blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHome topicNames={topicNames} />
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("blogs/content", "utf-8");

  const topicNames: topicName[] = files.map((file, index) => ({
    id: index + 1,
    name: file
      .replace(".mdx", "")
      .split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" "),
  }));

  return {
    props: { topicNames },
  };
};
