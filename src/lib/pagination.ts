import { ImagesResults } from "@/models/images";

const getPageNumber = (url?: string) => {
  if (!url) return null;
  const { searchParams } = new URL(url);
  return searchParams.get("page");
};

export const getPrevNextPages = (images: ImagesResults) => {
  const { next_page, prev_page, total_results, per_page } = images;

  let nextPage = getPageNumber(next_page);
  const prevPage = getPageNumber(prev_page);

  const totalPages =
    total_results % per_page
      ? Math.ceil(total_results / per_page)
      : total_results / per_page + 1;

  if (prevPage && parseInt(prevPage, 10) + 5 < totalPages) {
    nextPage = `${parseInt(prevPage, 10) + 5}`;
  }

  if (prevPage && parseInt(prevPage, 10) + 5 >= totalPages) {
    nextPage = null;
  }

  return { prevPage, nextPage, totalPages };
};
