import React, { useState } from "react"

import { ISummaryItem } from "@/types"

import ListItem from "../ListItem"
import styles from "./Carousel.module.css"

interface IProps {
  list: ISummaryItem[]
}

const Carousel = ({ list }: IProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleSlideRight = () => {
    setCurrentIndex((current) => (current + 1) % list.length)
  }

  const handleSlideLeft = () => {
    setCurrentIndex((current) => {
      const next = current - 1
      if (next < 0) {
        return list.length - 1
      }
      return next
    })
  }

  return (
    <div>
      <div className={styles.Carousel}>
        <ListItem item={list[currentIndex]} />
      </div>
      <div className={styles.Controls}>
        <button onClick={handleSlideLeft}>{`<<<`}</button>
        <button onClick={handleSlideRight}>{`>>>`}</button>
      </div>
    </div>
  )
}

export default Carousel
