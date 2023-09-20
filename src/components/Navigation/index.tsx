import React from "react";
import Link from "next/link";

import { navLinks } from "@/constants";

interface IProps {
  [x: string]: unknown;
}

const Navigation = ({}: IProps): JSX.Element => {
  return (
    <nav className="flex flex-wrap gap-2 justify-center py-4">
      {navLinks.map(({ id, href, name }) => (
        <Link
          key={id}
          href={href}
          className="px-4 py-2 bg-orange-600 text-yellow-200 font-bold text-lg min-w-[250px]"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
