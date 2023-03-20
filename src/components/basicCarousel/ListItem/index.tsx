import React, { ComponentProps } from "react"
import Image from "next/image"

import { ISummaryItem } from "@/types"
import { classnames } from "@/lib"
import styles from "./ListItem.module.css"

interface IProps extends Omit<ComponentProps<"div">, "children"> {
  item: ISummaryItem
}

const ListItem = ({
  item,
  className,
  ...restDivProps
}: IProps): JSX.Element => {
  const { title, description, image } = item
  return (
    <div className={classnames(styles.ListItem, className)} {...restDivProps}>
      <div>
        <Image
          src={image.url}
          alt={title}
          width={image.height}
          height={image.width}
          className={styles.ListItemImage}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ListItem
