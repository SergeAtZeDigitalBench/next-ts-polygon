import React from "react";
import Image from "next/image";
import classnames from "classnames";

import { BLUR_DATA_URL } from "@/constants";
import { getRandomFromArray } from "./utils";

export interface IScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

interface IProps {
  images: IScreenshot[];
  title: string;
  itemClassName?: string;
  className?: string;
}

const ImagesCarousel = ({
  images,
  title,
  className,
  itemClassName,
}: IProps): JSX.Element => {
  return (
    <div
      className={classnames(
        images.length > 1 ? "whitespace-nowrap overflow-auto" : "",
        className
      )}
    >
      {images.map(({ id, image }) => (
        <div
          key={id}
          className={classnames(
            `relative inline-block mx-1 min-h-[150px] ${
              images.length > 1 ? "w-[95%] mx-1" : "w-full"
            }`,
            itemClassName
          )}
        >
          <Image
            src={image}
            fill
            placeholder="blur"
            blurDataURL={getRandomFromArray(BLUR_DATA_URL)}
            className="object-cover"
            alt={title}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesCarousel;
