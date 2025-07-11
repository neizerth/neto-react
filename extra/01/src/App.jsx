import "./App.css";
import { withPokemon } from "./components/hoc/withPokemon";
import { PokemonSearch } from "./components/PokemonSearch/PokemonSearch";

const Ditto = withPokemon("ditto");

function App() {
  return (
    <>
      <Ditto />
      <PokemonSearch />
    </>
  );
}

export default App;
