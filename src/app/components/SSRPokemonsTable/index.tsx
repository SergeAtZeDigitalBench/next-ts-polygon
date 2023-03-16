import React from "react";

import { store } from "@/store";
import PokemonsTable from "../PokemonsTable";

interface IProps {
  [x: string]: unknown;
}

/**
 * @description Server-side component, table
 */
const SSRPokemonsTable = ({}: IProps): JSX.Element => {
  return (
    <div>
      <PokemonsTable pokemons={store.getState().search.startupPokemon} />
    </div>
  );
};

export default SSRPokemonsTable;
