import "./App.css";
import { Heart } from "./components/Heart/Heart";
import { HeartCC } from "./components/HeartCC/HeartCC";
import { Switch } from "./components/Switch/Switch";

function App() {
  return (
    <>
      <Heart onLike={() => console.log("like!!!")} />
      <HeartCC />
      <Switch />
    </>
  );
}

export default App;
