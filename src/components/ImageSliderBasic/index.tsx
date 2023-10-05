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

  return (
    <div className="w-full h-full relative">
      <Image
        src={currentImage.src}
        alt={currentImage.alt}
        width={currentImage.width}
        height={currentImage.height}
        className="h-full w-full object-cover block"
      />

      <button className="block absolute top-0 bottom-0 left-0 p-4 cursor-pointer hover:bg-black/20 delay-100 ease-in-out">
        <ArrowBigLeft className=" stroke-white fill-black w-8 h-8" />
      </button>
      <button className="block absolute top-0 bottom-0 right-0 p-4 cursor-pointer hover:bg-black/20 delay-100 ease-in-out">
        <ArrowBigRight className=" stroke-white fill-black w-8 h-8" />
      </button>
    </div>
  );
};

export default ImageSliderBasic;
