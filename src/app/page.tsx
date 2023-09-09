import React from "react";

import Gallery from "@/app/components/Gallery";
import { IPageProps } from "@/types";

const Homepage = async ({
  params,
  searchParams,
}: IPageProps<{}, { page?: string }>) => {
  return (
    <>
      {/* @ts-ignore Server component */}
      <Gallery page={searchParams.page} />
    </>
  );
};

export default Homepage;
