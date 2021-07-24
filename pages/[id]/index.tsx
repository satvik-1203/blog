import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";
import marked from "marked";
import Blog from "../../components/Blog";

const index = ({
  content,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Blog content={content} data={data} />;
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
  // const id = context.params;
  // const props = id;
  // return { props };
  const { id } = context.params as IParams; // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
  const fileContent = fs.readFileSync(`blogs/content/${id}.mdx`, "utf-8");
  let { content, data } = matter(fileContent);
  content = marked(content);
  return {
    props: { content, data },
  };
};

export default index;
