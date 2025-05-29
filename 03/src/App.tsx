import { useState } from "react";
import "./App.css";
import { StatelessHeart } from "./components/StatelessHeart/StatelessHeart";
import { Person } from "./components/Person/Person";
import { Switch } from "./components/Switch/Switch";
import { PokemonData } from "./components/PokemonData/PokemonData";
import { Content } from "./components/Content/Content";

function App() {
  const [count, setCount] = useState(0);

  const onSwitchToggle = (value: string) => {
    console.log({ value });
  };

  return (
    <>
      <StatelessHeart count={count} onLike={() => setCount((x) => x + 1)} />
      <Person name="Степан" lastName="Иванов" gender="male" />
      <Switch data={["Вкл", "Выкл"]} onToggle={onSwitchToggle} enabled />
      <PokemonData
        render={(data) =>
          data.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)
        }
      />
      <Content>Осторожно, злая собака!</Content>
    </>
  );
}

export default App;
