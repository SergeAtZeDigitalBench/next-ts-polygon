"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";

interface IProps {
  images: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const ImageSliderIntermediate = ({ images }: IProps): JSX.Element => {
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

  const goTo = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {images.map((currentImage) => {
          return (
            <Image
              key={currentImage.id}
              src={currentImage.src}
              alt={currentImage.alt}
              width={currentImage.width}
              height={currentImage.height}
              className={`h-full w-full object-cover transition-[translate] delay-[300ms] ease-in-out shrink-0 grow-0`}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div>

      <button
        onClick={showPrev}
        className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer hover:bg-black/20 active:bg-black/40 delay-100 ease-in-out"
      >
        <ArrowBigLeft className=" stroke-white fill-black w-8 h-8 active:animate-squish" />
      </button>
      <button
        onClick={showNext}
        className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer hover:bg-black/20 active:bg-black/40 delay-100 ease-in-out"
      >
        <ArrowBigRight className=" stroke-white fill-black w-8 h-8 active:animate-squish" />
      </button>
      <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex gap-1">
        {images.map((current, index) => {
          return (
            <button
              key={current.id}
              onClick={() => goTo(index)}
              className="cursor-pointer w-4 h-4 hover:scale-110 active:scale-125 transition-[scale] delay-200 ease-in-out"
            >
              {index === imageIndex ? (
                <CircleDot className=" stroke-white fill-black w-full h-full" />
              ) : (
                <Circle className=" stroke-white fill-black w-full h-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSliderIntermediate;
