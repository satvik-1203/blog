import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Prism from "prismjs";

// @ts-ignore
import remarkCodeTitle from "remark-code-titles";

const Index = ({
  content,
  data,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{data.title} Blog</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className="blog mt-16 mx-auto focus:outline-none  py-10 px-5 sm:px-10 sm:w-3/4 ">
        <MDXRemote {...html} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs
    .readdirSync("blogs/content", "utf-8")
    .map(file => file.replace(".mdx", ""));
  const paths = files.map(id => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { id } = context.params as IParams; // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
  const fileContent = fs.readFileSync(`blogs/content/${id}.mdx`, "utf-8");
  let { content, data } = matter(fileContent);

  const html = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
    },
  });
  return {
    props: { html, data, content },
  };
};

export default Index;
