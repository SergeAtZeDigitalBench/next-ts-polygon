import React from "react";

import { GRID_DATA_ITEMS } from "@/data";
import { IPageProps } from "@/types";

const RecordDetailsPage = async ({
  params,
  searchParams,
}: IPageProps<{ id: string }>) => {
  const found = GRID_DATA_ITEMS.find(({ attributes }) =>
    attributes.href.includes(params.id)
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        {found?.attributes.text || "Record Details Page"}
      </h1>
      <p>Record ID: {params.id}</p>
    </>
  );
};

export default RecordDetailsPage;
