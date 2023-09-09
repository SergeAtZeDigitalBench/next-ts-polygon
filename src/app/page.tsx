import React from "react";

import Gallery from "@/app/components/Gallery";
import { IPageProps } from "@/types";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      {/* @ts-ignore Server component */}
      <Gallery />
    </>
  );
};

export default Homepage;
