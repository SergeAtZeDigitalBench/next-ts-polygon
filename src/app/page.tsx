import React from "react";

import { IPageProps } from "@/types";
import { mockLongApiCall } from "@/app/lib";
import PostsList from "@/app/components/PostsList";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  const posts = await mockLongApiCall();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V13 POLYGON
      </h1>
      <PostsList posts={posts} />
    </>
  );
};

export default Homepage;
