import React from "react";

import { IPageProps } from "@/types";

const QuizPage = async ({ params, searchParams }: IPageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Playlist Personality Quiz
      </h1>
    </>
  );
};

export default QuizPage;
