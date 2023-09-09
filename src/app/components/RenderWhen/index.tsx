import React from "react";

interface IProps {
  isTrue: boolean;
  children: React.ReactNode;
}

const RenderWhen = ({ children, isTrue }: IProps): JSX.Element | null =>
  isTrue ? <>{children}</> : null;

export default RenderWhen;
