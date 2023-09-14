import React from "react";

import { IPageProps } from "@/types";
import CounterControls from '@/app/components/CounterControls'

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        HOMEPAGE
      </h1>

      <CounterControls />
    </>
  );
};

export default Homepage;
