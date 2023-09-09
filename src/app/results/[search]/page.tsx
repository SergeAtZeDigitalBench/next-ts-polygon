import React from "react";

import { IPageProps } from "@/types";

const ResultsPage = ({
  params,
}: IPageProps<{ search: string }>): JSX.Element => {
  return (
    <div>
      <h1>Results for: &rsquo;{params.search}&rsquo;</h1>
    </div>
  );
};

export default ResultsPage;
