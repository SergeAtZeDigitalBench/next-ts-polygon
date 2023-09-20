import React from "react";

interface IProps {
  [x: string]: unknown;
}

const LoadingPage = ({}: IProps): JSX.Element => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h1 className=" text-3xl font-bold text-orange-700">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
