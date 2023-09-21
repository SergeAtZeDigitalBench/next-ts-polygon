import React from "react";
import Image from "next/image";

import { BLUR_DATA_URL } from "@/constants";

export const getRandomFromArray = <I = unknown,>(arrList: I[]) => {
  if (arrList.length <= 1) return arrList[0];

  const randomIndex = Math.floor(Math.random() * arrList.length);

  return arrList[randomIndex];
};

export interface IScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface IProps {
  images: IScreenshot[];
  title: string;
}

const ImagesCarousel = ({ images, title }: IProps): JSX.Element => {
  return (
    <div className="whitespace-nowrap overflow-auto ">
      {images.map(({ id, image }) => {
        return (
          <div
            key={id}
            className={`h-[300px] relative inline-block mx-1 ${
              images.length > 1 ? "w-[95%]" : ""
            }`}
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src={image}
              fill
              placeholder="blur"
              blurDataURL={getRandomFromArray(BLUR_DATA_URL)}
              className="object-cover"
              alt={title}
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">slide label {id}</h5>
              <p>Some representative placeholder content for the slide.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesCarousel;
