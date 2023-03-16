import React from "react";
import { IPokemon } from "@/types";
import PokemonsTable from "./components/PokemonsTable";

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

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Next.JS v13</h1>
      <PokemonsTable pokemons={pokemons} />
    </main>
  );
};

export default Homepage;
