"use client";

import React, { useState } from "react";
import Image from "next/image";

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
    <div>
      <div>
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
        />
      </div>
      <button>prev</button>
      <button>next</button>
    </div>
  );
};

export default ImageSliderBasic;
