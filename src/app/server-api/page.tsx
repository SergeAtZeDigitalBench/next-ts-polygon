import React from "react";

import { IPageProps } from "@/types";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        API from Server
      </h1>
    </>
  );
};

export default Homepage;
