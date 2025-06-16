import "./App.css";
import { Caluclator } from "./components/Calculator";
import { CircleOfLife } from "./components/CircleOfLife";
import { PieChart } from "./components/PieChart";
import { WindowSize } from "./components/WindowSize";

function App() {
  return (
    <>
      <Caluclator />
      <CircleOfLife />
      <PieChart />
      <WindowSize />
    </>
  );
}

export default App;
