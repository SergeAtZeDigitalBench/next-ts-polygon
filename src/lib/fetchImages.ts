import { ImagesResults, ImagesSchemaWithPhotos } from "@/models/images";
import { getImgPlaceholders } from "./getBase64";
import { env } from "./env";

export const fetchImages = async (
  url: string,
  options?: RequestInit
): Promise<ImagesResults | undefined> => {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: env.PEXELS_API_KEY,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText || "Fetch images error");
    }

    const imagesResults: ImagesResults = await res.json();

    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);

    if (parsedData.total_results === 0) return;

    return await getImgPlaceholders(parsedData);
  } catch (error) {
    console.log("Error: ", error);
    return;
  }
};
