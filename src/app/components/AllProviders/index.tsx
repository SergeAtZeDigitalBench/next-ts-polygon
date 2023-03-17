"use client";

import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/store";
interface IProps {
  children: React.ReactNode;
}

const AllProviders = ({ children }: IProps): JSX.Element => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default AllProviders;
