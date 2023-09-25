import React from "react";

import { IPageProps } from "@/types";

const ClientApiPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        API from Client
      </h1>
    </>
  );
};

export default ClientApiPage;
