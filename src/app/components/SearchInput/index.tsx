"use client";

import React, { useRef } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "@/types";
import { setSearch } from "@/store";

import PokemonsTable from "../PokemonsTable";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface IProps {
  [x: string]: unknown;
}

const SearchInput = ({}: IProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { search, startupPokemon } = useAppSelector((state) => state.search);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter" || !inputRef.current) return;

    dispatch(setSearch(inputRef.current.value));
  };

  return (
    <div className="px-4 py-2">
      <input
        type="text"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className="border-2 border-solid border-gray-800 rounded-md"
      />
      <PokemonsTable pokemons={startupPokemon} />
    </div>
  );
};

export default SearchInput;
