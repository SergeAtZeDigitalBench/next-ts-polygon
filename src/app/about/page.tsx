import React from "react";

import { IPageProps } from "@/types";

const AboutPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">About</h1>
    </>
  );
};

export default AboutPage;
