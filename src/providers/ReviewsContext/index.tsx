"use client";

import React, { useState, createContext, useContext } from "react";

import { ParentProps, Review } from "@/types";

const useReviewsState = (initialReviews: Review[]) =>
  useState<Review[]>(() => initialReviews);

const ReviewsContext = createContext<ReturnType<typeof useReviewsState> | null>(
  null
);

export const useReviews = () => {
  const ctx = useContext(ReviewsContext);

  if (!ctx) {
    throw new Error("No context found. Check your provider's scope.");
  }

  return ctx;
};

interface IProps extends ParentProps {
  reviews: Review[];
}

export const ReviewsProvider = ({ reviews, children }: IProps): JSX.Element => {
  const value = useReviewsState(reviews);

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
};
