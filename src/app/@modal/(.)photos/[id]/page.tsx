import React from 'react'
import Frame from '../../../../components/Frame'
import Modal from '../../../../components/Modal'
import { PHOTOS } from '../../../../constants'
import { IPageProps } from '../../../../types'

const getPhoto = (id: string) => PHOTOS.find((current) => current.id === id)

const ModalPage = ({ params }: IPageProps<{ id: string }>): JSX.Element => {
  const photo = getPhoto(params.id)

  return <Modal>{photo ? <Frame photo={photo} /> : <p>not found</p>}</Modal>
}

export default ModalPage
