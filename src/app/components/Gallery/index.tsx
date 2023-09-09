import React from "react";

import ImgContainer from "@/app/components/ImgContainer";
import RenderWhen from "@/app/components/RenderWhen";
import Footer from "@/app/components/Footer";
import { getPrevNextPages } from "@/lib/pagination";
import { fetchImages } from "@/lib/fetchImages";
import { ImagesResults } from "@/models/images";
import { env } from "@/lib/env";

interface IProps {
  topic?: string;
  page?: string;
}

const Gallery = async ({ topic, page = "1" }: IProps) => {
  const endpoint = !!topic
    ? `/search?query=${topic}&page=${page}`
    : `/curated?page=${page}`;

  const url = env.PEXELS_API_URL + endpoint;

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0) {
    return <h2 className=" text-2xl font-bold m-4">No images found.</h2>;
  }
  const { prevPage, nextPage } = getPrevNextPages(images);
  const footerProps = { topic, page, prevPage, nextPage };

  return (
    <>
      <section>
        <ul className=" px-2 my-3 grid gap-2 grid-cols-gallery">
          {images.photos.map((image) => (
            <ImgContainer key={image.id} photo={image}></ImgContainer>
          ))}
        </ul>
      </section>
      {/* TODO : add footer */}
      <RenderWhen isTrue={!!prevPage || !!nextPage}>
        <Footer {...footerProps} />
      </RenderWhen>
    </>
  );
};

export default Gallery;
