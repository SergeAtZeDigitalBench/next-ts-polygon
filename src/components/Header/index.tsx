import React from 'react'

interface IProps {
  children: React.ReactNode
}

const Header = ({ children }: IProps): JSX.Element => {
  return (
    <div className=" min-h-[30vh] bg-orange-500 p-4 rounded-lg flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Header
