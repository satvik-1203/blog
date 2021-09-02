import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import fs from "fs";
import blogs from "../blogs/blogs.json";
import MainHome from "@Components/mainHome/index";

export default function Home({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Place where you can read everything satvik's wants to share :). Thanks for being here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHome topicNames={blogs} />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: { blogs },
  };
};
