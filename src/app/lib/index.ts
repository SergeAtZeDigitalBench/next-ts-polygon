import posts from "./data.json";

export const mockLongApiCall = (
  errMessage?: string
): Promise<
  {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[]
> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errMessage) {
        reject(errMessage);
      } else {
        resolve(posts);
      }
    }, 1500);
  });
