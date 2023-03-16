import { NextApiHandler } from "next";
import pokemon from "@/data/pokemon.json";

interface IReturnType {}

const handleSearch: NextApiHandler<IReturnType> = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const searchParams = req.query;
  const name = searchParams.name as string | undefined;

  const pokemonData = pokemon.filter((current) =>
    current.name.toLowerCase().includes(name?.toLowerCase() || "")
  );

  res.status(200).json(pokemonData.slice(0, 10));
};

export default handleSearch;
