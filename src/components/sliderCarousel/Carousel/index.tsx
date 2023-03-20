import React, { useState } from "react"

import styles from "./Carousel.module.css"

const generateArrayAscending = (amount: number) =>
  Object.keys(Array(amount + 1).fill(0))
    .slice(1)
    .map((strNumeric) => ({
      id: strNumeric,
      index: parseInt(strNumeric) - 1,
    }))

interface ICarouselItemProps {
  children: React.ReactNode
  width?: number | string
}

const CarouselItem = ({ children, width = "100%" }: ICarouselItemProps) => {
  return (
    <div className={styles.CarouselItem} style={{ width }}>
      {children}
    </div>
  )
}

interface IProps {
  children: React.ReactElement[]
}

const Carousel = ({ children }: IProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const childrenCount = React.Children.count(children)

  const updateNewIndex = (newIndex: number) => {
    if (newIndex < 0) {
      return 0
    } else if (newIndex >= childrenCount) {
      return childrenCount - 1
    }
    return newIndex
  }

  const handlePrev = () => {
    setActiveIndex((current) => updateNewIndex(current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => updateNewIndex(current + 1))
  }

  return (
    <div className={styles.Carousel}>
      <div
        className={styles.CarouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (currentChild: React.ReactElement) => {
          return React.cloneElement(currentChild, { width: `100%` })
        })}
      </div>
      <div className={styles.CarouselIndicators}>
        <button
          onClick={handlePrev}
          className={styles.CarouselIndicatorsControlButton}
          disabled={activeIndex === 0}
        >
          prev
        </button>
        {generateArrayAscending(childrenCount).map(({ id, index }) => (
          <button
            key={id}
            onClick={() => setActiveIndex(updateNewIndex(index))}
            disabled={activeIndex === index}
            className={styles.CarouselIndicatorsPageButton}
          >
            {id}
          </button>
        ))}
        <button
          onClick={handleNext}
          className={styles.CarouselIndicatorsControlButton}
          disabled={activeIndex === childrenCount - 1}
        >
          next
        </button>
      </div>
    </div>
  )
}

Carousel.Item = CarouselItem

export default Carousel
