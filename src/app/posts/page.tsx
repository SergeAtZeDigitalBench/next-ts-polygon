import React from "react";
import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "@/providers/ReactQueryProvider/getQueryClient";
import Hydrate from "@/providers/ReactQueryProvider/Hydrate";

import { IPost, IPageProps } from "@/types";

import Posts from "./Posts";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = (await res.json()) as IPost[];
  return posts;
}

const PostsPage = async ({ params, searchParams }: IPageProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrate-posts"], getPosts);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <h1 className="text-3xl font-bold underline text-center">Posts</h1>
      <Posts />
    </Hydrate>
  );
};

export default PostsPage;
