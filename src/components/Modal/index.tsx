'use client'

import { ReactNode } from 'react'

import { useModal } from './useModal'

interface IProps {
  children: ReactNode
}

const Modal = ({ children }: IProps): JSX.Element => {
  const { onClick, overlayRef, wrapperRef } = useModal()

  return (
    <div
      ref={overlayRef}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
