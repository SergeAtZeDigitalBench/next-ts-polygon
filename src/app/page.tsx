import React from "react";

import { IPokemon } from "@/types";
import { NEXT_PUBLIC_BASE_API } from "@/constants";
import { store, setStartupPokemon } from "@/store";
import AllProviders from "./components/AllProviders";
import SearchInput from "./components/SearchInput";
import Preloader from "./components/Preloader";

const fetchPokemons = async (name?: string) => {
  try {
    const res = await fetch(
      name
        ? `${NEXT_PUBLIC_BASE_API}search?name=${name}`
        : `${NEXT_PUBLIC_BASE_API}search`
    );
    if (!res.ok) {
      throw new Error("Failed fetch pokemons");
    }
    return (await res.json()) as IPokemon[];
  } catch (error) {
    return [];
  }
};

const Homepage = async ({}) => {
  const pokemons = await fetchPokemons();
  store.dispatch(setStartupPokemon(pokemons));

  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center">
        Search Pokemon{" "}
        <small className=" text-xl">Client and server side</small>
      </h1>
      <Preloader pokemons={pokemons} />
      <AllProviders>
        <SearchInput />
      </AllProviders>
    </main>
  );
};

export default Homepage;
