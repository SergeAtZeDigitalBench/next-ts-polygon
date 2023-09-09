import React from "react";
import type { Metadata } from "next";

import Gallery from "@/app/components/Gallery";
import { IPageProps } from "@/types";

export const generateMetadata = ({
  params,
}: IPageProps<{ search: string }>): Metadata => {
  return {
    title: `Results for ${params.search}`,
  };
};

const ResultsPage = ({
  params,
}: IPageProps<{ search: string }>): JSX.Element => {
  return (
    <>
      {/* @ts-ignore Server component */}
      <Gallery topic={params.search} />
    </>
  );
};

export default ResultsPage;
