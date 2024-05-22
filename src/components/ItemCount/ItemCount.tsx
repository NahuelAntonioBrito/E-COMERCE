import { useState } from "react";
import "./ItemCount.css";

type Props = {
  stock: number;
  initial: number;
  onAdd: (quantity: number) => void;
};

function ItemCount({ stock, initial, onAdd }: Props) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <button className="Button" onClick={decrement}>
        -
      </button>
      <h4 className="Number">{count}</h4>
      <button className="Button" onClick={increment}>
        +
      </button>
      <button className="Button" onClick={() => onAdd(count)} disabled={!stock}>
        Agregar Al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
