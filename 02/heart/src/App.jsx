import { useState } from "react";
import "./App.css";
import { Heart } from "./components/Heart/Heart";
import { HeartCC } from "./components/HeartCC/HeartCC";
import { StatelessHeart } from "./components/StatelessHeart/StatelessHeart";
import { Switch } from "./components/Switch/Switch";
import { EmojiList } from "./components/EmojiList/EmojiList";
import { SimpleHeart } from "./components/SimpleHeart/SimpleHeart";
import { StateHeart } from "./components/StateHeart/StateHeart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SimpleHeart /> */}
      <StateHeart />
      <Heart onLike={() => console.log("like!!!")} />
      <HeartCC />
      <Switch />
      <StatelessHeart count={count} onLike={() => setCount((x) => x + 1)} />
      <EmojiList />
    </>
  );
}

export default App;
