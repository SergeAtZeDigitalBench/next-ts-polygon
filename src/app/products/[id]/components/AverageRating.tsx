"use client";

import { Review } from "@/types";

interface Props {
  reviews: Review[];
}

const AverageRating = ({ reviews }: Props) => {
  return (
    <>
      {reviews && reviews?.length && (
        <div className="mt-4 font-light">
          Average Rating:{" "}
          {(
            reviews?.reduce((a, b) => a + b.rating, 0) / reviews?.length
          ).toFixed(1)}
        </div>
      )}
    </>
  );
};

export default AverageRating;
