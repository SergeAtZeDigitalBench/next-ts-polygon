import React from "react";
import type { Metadata } from "next";

import Gallery from "@/app/components/Gallery";
import { IPageProps } from "@/types";

export const generateMetadata = ({
  params,
}: IPageProps<{ searchTerms: [string, string | undefined] }>): Metadata => {
  const [topic, page] = params.searchTerms;

  return {
    title: `Results for ${topic} - Page ${page || 1}`,
  };
};

const ResultsPage = ({
  params,
}: IPageProps<{ searchTerms: [string, string | undefined] }>): JSX.Element => {
  const [topic, page] = params.searchTerms;

  return (
    <>
      {/* @ts-ignore Server component */}
      <Gallery topic={topic} page={page || "1"} />
    </>
  );
};

export default ResultsPage;
