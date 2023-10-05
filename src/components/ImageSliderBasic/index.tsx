"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface IProps {
  images: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const ImageSliderBasic = ({ images }: IProps): JSX.Element => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const currentImage = images[imageIndex];

  const showNext = () => {
    setImageIndex((current) => {
      const nextIndex = current + 1;
      if (nextIndex > images.length - 1) {
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  const showPrev = () => {
    setImageIndex((current) => {
      const prevIndex = current - 1;
      if (prevIndex < 0) {
        return images.length - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <div className="w-full h-full relative">
      <Image
        src={currentImage.src}
        alt={currentImage.alt}
        width={currentImage.width}
        height={currentImage.height}
        className="h-full w-full object-cover block"
      />

      <button
        onClick={showPrev}
        className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer hover:bg-black/20 active:bg-black/40 delay-100 ease-in-out"
      >
        <ArrowBigLeft className=" stroke-white fill-black w-8 h-8" />
      </button>
      <button
        onClick={showNext}
        className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer hover:bg-black/20 active:bg-black/40 delay-100 ease-in-out"
      >
        <ArrowBigRight className=" stroke-white fill-black w-8 h-8" />
      </button>
    </div>
  );
};

export default ImageSliderBasic;
