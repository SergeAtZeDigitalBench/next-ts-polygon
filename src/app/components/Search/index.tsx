"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = (): JSX.Element => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!search) return;

    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex justify-center md:justify-between"
    >
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white text-black text-xl p-2 w-[260px] sm:w-80 rounded-xl"
      />
    </form>
  );
};

export default Search;
