import { useState } from "react";
import { Item } from "../../data";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

interface ItemDetailProps {
  item: Item;
}

function ItemDetail({ item }: ItemDetailProps) {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity: number) => {
    setQuantity(quantity);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail">
          <h2 className="item-title">{item.title}</h2>
          <img
            src={item.thumbnails[0]}
            alt={item.title}
            className="item-image"
          />
          <p className="item-description">{item.description}</p>
          <p className="item-price">Price: ${item.price}</p>
          <p className="item-stock">Stock: {item.stock}</p>
        </div>
        <footer className="item-footer">
          {quantity > 0 ? (
            <Link to="/cart" className="finish-purchase">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={item.stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </div>
    </div>
  );
}

export default ItemDetail;
