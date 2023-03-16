import React from "react";
import { IPokemon } from "@/types";
import { store, setStartupPokemon } from "@/store";
import SSRPokemonsTable from "./components/SSRPokemonsTable";

const fetchPokemons = async (name?: string) => {
  try {
    const res = await fetch(
      name
        ? `http://localhost:3000/api/search?name=${name}`
        : "http://localhost:3000/api/search"
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
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
      <SSRPokemonsTable />
    </main>
  );
};

export default Homepage;
