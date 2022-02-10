import logo from "./logo.svg";
import "./App.css";
import Contenido from "./components/Contenido/Contenido";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Contenido></Contenido>
    </div>
  );
}

export default App;
