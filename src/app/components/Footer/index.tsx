"use client";

import React from "react";
import Link from "next/link";

interface IProps {
  topic: string | undefined;
  page: string;
  prevPage: string | null;
  nextPage: string | null;
}

const getPageNums = ({
  prevPage,
  nextPage,
}: Pick<IProps, "prevPage" | "nextPage">): number[] => {
  const pages: number[] = [];
  if (!prevPage || !nextPage) return pages;

  for (let i = parseInt(prevPage, 10) + 1; i < parseInt(nextPage, 10); i++) {
    pages.push(i);
  }

  return pages;
};

const getPageHref = (page: string, topic?: string) => {
  return topic ? `/results/${topic}/${page}` : `?page=${page}`;
};

const Footer = ({
  topic,
  page,
  prevPage,
  nextPage,
}: IProps): JSX.Element | null => {
  const pageNums = getPageNums({ prevPage, nextPage });

  const nextPageArea = nextPage ? (
    <Link
      href={getPageHref(nextPage, topic)}
      className={` px-4 rounded-md hover:bg-black hover:text-white ${
        !prevPage ? "mx-auto" : ""
      }`}
    >
      {!prevPage ? `More >>>` : `>>>`}
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <Link
      href={getPageHref(prevPage, topic)}
      className={` px-4 rounded-md hover:bg-black hover:text-white ${
        !nextPage ? "mx-auto" : ""
      }`}
    >
      {!nextPage ? `<<< Back` : `<<<`}
    </Link>
  ) : null;

  return (
    <footer className=" px-2 py-4 flex flex-row justify-between items-center font-bold w-60 mx-auto">
      {prevPageArea}
      {pageNums.map((currentNumber) => {
        if (!!page && parseInt(page, 10) === currentNumber) {
          return (
            <div
              key={currentNumber}
              className=" w-[20px] h-[20px] flex justify-center items-center rounded-lg"
            >
              <span>{currentNumber}</span>
            </div>
          );
        }
        return (
          <Link
            key={currentNumber}
            href={getPageHref(currentNumber.toString(), topic)}
            className=" w-[20px] h-[20px] flex justify-center items-center rounded-lg hover:bg-black hover:text-white "
          >
            <span>{currentNumber}</span>
          </Link>
        );
      })}
      {nextPageArea}
    </footer>
  );
};

export default Footer;
