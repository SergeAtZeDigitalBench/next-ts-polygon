import Link from "next/link";

import { GRID_DATA_ITEMS } from "@/data";

interface IProps {
  [x: string]: unknown;
}

const ImagesGrid = ({}: IProps): JSX.Element => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {GRID_DATA_ITEMS.map(({ id, attributes }) => {
        return (
          <Link
            href={attributes.href}
            key={id}
            className={`${attributes.background} w-52 h-52 flex flex-col justify-end items-center border-[2px] border-black`}
          >
            <span className="w-full bg-slate-200/75 text-center mb-2 hover:text-white hover:bg-slate-700/75">
              {attributes.text}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default ImagesGrid;
