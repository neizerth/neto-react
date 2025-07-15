import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Heart } from "./components/Heart";
import { HeartCC } from "./components/HeartCC";
import { User } from "./components/User";
import { Modal } from "./components/Modal/Modal";
import { EmojiList } from "./components/EmojiList/EmojiList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <User firstName="Ivan" lastName={"Ivanov"} age={45} />
      <User firstName="Oleg" lastName={"Petrov"} age={10} />

      <Heart />
      <HeartCC />
      <EmojiList list={["🍮", "⭐", "👔", "🚃"]} />
      {/* <Modal>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, magni
        minus deleniti tenetur quod ratione, atque ad architecto molestias
        accusamus odio recusandae consequatur sint fuga delectus? Aut eaque enim
        sed!
      </Modal> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
