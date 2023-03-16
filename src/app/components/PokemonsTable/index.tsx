"use client";

import React from "react";
import { IPokemon } from "@/types";

interface IProps {
  pokemons: IPokemon[];
}

const PokemonsTable = ({ pokemons }: IProps): JSX.Element => {
  return (
    <div className="px-2">
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((current) => {
            return (
              <tr key={current.id}>
                <td>{current.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonsTable;
