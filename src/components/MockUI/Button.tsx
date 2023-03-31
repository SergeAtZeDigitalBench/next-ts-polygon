import React, { ComponentProps } from "react"

import { classnames } from "@/lib"

const styledButton =
  "w-[20px] h-[20px] border-[1px] pb-[px] pr-[1px] border-gray-600 rounded-md bg-blue-400 flex items-center justify-center hover:bg-blue-500 active:bg-blue-600"

interface IProps extends ComponentProps<"button"> {
  [x: string]: unknown
}

const Button = ({
  children,
  className,
  ...restButtonProps
}: IProps): JSX.Element => (
  <button
    role="button"
    className={classnames(styledButton, className)}
    {...restButtonProps}
  >
    <span>{children}</span>
  </button>
)

export default Button
