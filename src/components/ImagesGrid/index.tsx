import Link from "next/link";

import { GRID_DATA_ITEMS } from "@/data";

interface IProps {
  [x: string]: unknown;
}

const ImagesGrid = ({}: IProps): JSX.Element => {
  return (
    <div>
      {GRID_DATA_ITEMS.map(({ id, attributes }) => {
        return (
          <div key={id}>
            <Link href={attributes.href}>{attributes.text}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ImagesGrid;
