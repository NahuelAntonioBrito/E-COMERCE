import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/ItemList/CardList";
import Boton from "./components/boton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1>Item List</h1>
      <CardList />
    </>
  );
}

export default App;
