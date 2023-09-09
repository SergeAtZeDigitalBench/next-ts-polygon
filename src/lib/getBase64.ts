import { getPlaiceholder } from "plaiceholder";

import { ImagesResults } from "@/models/images";

const getImageBase64 = async (src: string): Promise<string | undefined> => {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      throw new Error(res.statusText || "Failed to decode image placeholder");
    }
    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    console.log("Error: ", error);
    return;
  }
};

export const getImgPlaceholders = async (
  data: ImagesResults
): Promise<ImagesResults> => {
  const { photos } = data;

  const photosWithPlaceholder = await Promise.all(
    photos.map(async (currentPhoto) => ({
      ...currentPhoto,
      blurredDataUrl: await getImageBase64(currentPhoto.src.large),
    }))
  );

  return { ...data, photos: photosWithPlaceholder };
};
