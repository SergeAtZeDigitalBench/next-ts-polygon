import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  modal: ReactNode
}

const GalleryLayout = ({ children, modal }: Props): JSX.Element => {
  return (
    <div>
      {children}
      {modal}
    </div>
  )
}

export default GalleryLayout
