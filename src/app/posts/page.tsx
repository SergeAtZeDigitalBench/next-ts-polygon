import React from "react";

import { IPageProps } from "@/types";
import PostsList from "@/components/PostsList";

const PostsPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Posts</h1>
    </>
  );
};

export default PostsPage;
