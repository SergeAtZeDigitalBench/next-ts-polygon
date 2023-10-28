import React, { ComponentProps } from 'react'
import classnames from 'classnames'

interface IProps extends ComponentProps<'button'> {
  isVisible: boolean
}

const ToggleShowIconButton = ({
  isVisible,
  className,
  ...restButtonProps
}: IProps): JSX.Element => {
  return (
    <button
      {...restButtonProps}
      className={classnames(
        'w-[25px] h-[25px] flex justify-center items-center',
        className
      )}
    >
      {!isVisible ? '👁️' : '🚫'}
    </button>
  )
}

export default ToggleShowIconButton
