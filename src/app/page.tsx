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
        <ImagesCarousel images={screenshots.slice(0, 1)} title="Game" />
      </div>
      <hr className="my-4" />
      <div className="w-[95%] mx-auto">
        <ImagesCarousel
          images={screenshots}
          title="Game"
          itemClassName="h-[200px] xs:h-[250px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
        />
      </div>
    </>
  );
};

export default Homepage;
