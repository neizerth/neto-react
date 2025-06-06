import "./App.css";
import { List } from "./components/List/List";
import { RegisterFormModal } from "./components/RegisterFormModal/RegisterFormModal";

function App() {
  return (
    <div className="app">
      {/* <RegisterFormModal /> */}
      <List marker="+">
        <div>Мясо</div>
        <div>Колбаса</div>
        <div>Селёдка</div>
      </List>
    </div>
  );
}

export default App;
