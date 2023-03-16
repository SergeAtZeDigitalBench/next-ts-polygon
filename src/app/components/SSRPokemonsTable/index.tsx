import React from "react";

import PokemonsTable from "../PokemonsTable";
interface IProps {
  [x: string]: unknown;
}

const SSRPokemonsTable = ({}: IProps): JSX.Element => {
  return (
    <div>
      <PokemonsTable pokemons={[]} />
    </div>
  );
};

export default SSRPokemonsTable;
