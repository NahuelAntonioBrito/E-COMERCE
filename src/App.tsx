import { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const nombre = "Nahuel";
  return (
    <>
      <header className="App-header">
        <h1>Search Example</h1>
        <SearchBar />
      </header>
      <p>Hola {nombre}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
