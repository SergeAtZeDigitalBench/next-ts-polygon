import React from "react";
import Image from "next/image";

import ImgContainer from "@/app/components/ImgContainer";
import { fetchImages } from "@/lib/fetchImages";
import { ImagesResults } from "@/models/images";
import { env } from "@/lib/env";

interface IProps {}

const Gallery = async ({}: IProps) => {
  const url = env.PEXELS_API_URL + "/curated";
  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images) {
    return <h2 className=" text-2xl font-bold m-4">No images found.</h2>;
  }

  return (
    <section>
      <ul className=" px-2 my-3 grid gap-2 grid-cols-gallery">
        {images.photos.map((image) => (
          <ImgContainer key={image.id} photo={image}></ImgContainer>
        ))}
      </ul>
    </section>
  );
};

export default Gallery;
