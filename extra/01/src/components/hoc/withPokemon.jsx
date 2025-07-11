import { Pokemon } from "../Pokemon/Pokemon";

export const withPokemon = (name) => {
  const WithPokemon = () => {
    return <Pokemon name={name} />;
  };

  WithPokemon.displayName = `WithPokemon(${name})`;

  return WithPokemon;
};
