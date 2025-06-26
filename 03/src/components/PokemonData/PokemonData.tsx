import { useEffect, useState, type ReactNode } from "react";

type Pokemon = {
  name: string;
};

type PokemonDataProps = {
  render: (data: Pokemon[]) => ReactNode;
};

export const PokemonData = ({ render }: PokemonDataProps) => {
  const [data, setData] = useState([
    {
      name: "Ditto",
    },
    {
      name: "Pikachu",
    },
  ]);

  return render(data);
};
