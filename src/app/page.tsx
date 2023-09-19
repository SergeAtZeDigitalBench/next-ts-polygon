import React from "react";

import { IPageProps } from "@/types";
import PostsList from "@/components/PostsList";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V13 POLYGON
      </h1>
    </>
  );
};

export default Homepage;
