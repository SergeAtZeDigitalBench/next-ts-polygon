import React from "react";
import Link from "next/link";

import Search from "../Search";

const Navbar = (): JSX.Element => {
  return (
    <nav className="max-w-6xl mx-auto flex flex-col gap-4 p-4 font-bold sm:flex-row sm:justify-between items-center text-white">
      <h1 className=" text-2xl sm:text-3xl text-center whitespace-nowrap">
        <Link href="/">Next.js Image gallery</Link>
      </h1>
      <Search />
    </nav>
  );
};

export default Navbar;
