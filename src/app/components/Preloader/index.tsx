"use client";

import React, { useRef } from "react";
import { IPokemon } from "@/types";
import { setStartupPokemon, store } from "@/store";

interface IProps {
  pokemons: IPokemon[];
}

const Preloader = ({ pokemons }: IProps): JSX.Element => {
  const loaded = useRef<boolean>(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }

  return <div />;
};

export default Preloader;
