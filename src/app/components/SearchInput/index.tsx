"use client";

import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState, IPokemon } from "@/types";
import { setSearch, pokemonApi } from "@/store";

import PokemonsTable from "../PokemonsTable";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface IProps {
  [x: string]: unknown;
}

const SearchInput = ({}: IProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { search, startupPokemon } = useAppSelector((state) => state.search);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as IPokemon[]
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Enter" || !inputRef.current) return;

    dispatch(setSearch(inputRef.current.value));
    inputRef.current.value = "";
  };

  useEffect(() => {
    search && dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div className="px-4 py-2">
      <h4>Search term: {search}</h4>
      <input
        type="text"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className="border-2 border-solid border-gray-800 rounded-md"
      />
      <PokemonsTable pokemons={search.length ? data || [] : startupPokemon} />
    </div>
  );
};

export default SearchInput;
