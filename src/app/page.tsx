import React from "react";

import { IPageProps } from "@/types";
import ImagesCarousel from "@/components/ImagesCarousel";
import { screenshots } from "@/constants";

const Homepage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        NEXT V13 POLYGON
      </h1>
      <div>
        <ImagesCarousel images={screenshots} title="Game" />
      </div>
    </>
  );
};

export default Homepage;
