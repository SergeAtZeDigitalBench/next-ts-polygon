import fs from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";

export const logRequest = (req: NextRequest) => {
  const { nextUrl, method } = req;
  console.log("REQUEST :>> ", { method, url: nextUrl.pathname });
};

export const serveMockData = <D = any>({
  data,
  delay = 900,
  errMessage,
}: {
  data: D;
  errMessage?: string;
  delay?: number;
}): Promise<D> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errMessage) {
        reject(errMessage);
      } else {
        resolve(data);
      }
    }, delay);
  });

export const readDb = async <D = any>(
  fileName: string
): Promise<[D, null] | [null, string]> => {
  try {
    const jsonData = await fs.readFile(
      path.join(process.cwd(), "/src/db", `${fileName}.json`),
      { encoding: "utf-8" }
    );
    const parsed: D = JSON.parse(jsonData);
    return [parsed, null];
  } catch (error) {
    const msg =
      error instanceof Error
        ? error.message
        : `Faled to read file: '${fileName}'`;
    return [null, msg];
  }
};
