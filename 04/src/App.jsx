import { useState } from "react";
import "./App.css";
import { ColorSelect } from "./components/ColorSelect/ColorSelect";
import { List } from "./components/List/List";
import { RegisterFormModal } from "./components/RegisterFormModal/RegisterFormModal";
import { FeedbackForm } from "./components/FeedbackForm/FeedbackForm";

function App() {
  const [color, setColor] = useState();

  const onColorChange = (color) => {
    console.log(color);
    setColor(color);
  };
  return (
    <div className="app">
      <FeedbackForm />
      {/* <RegisterFormModal /> */}
      {/* <ColorSelect onSelect={onColorChange} value={color} />
      <List marker="+">
        <div>Мясо</div>
        <div>Колбаса</div>
        <div>Селёдка</div>
      </List> */}
    </div>
  );
}

export default App;
