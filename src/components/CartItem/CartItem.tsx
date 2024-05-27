import React from "react";
import { CartItem as CartItemType } from "../../context/CartContext";
import "./CartItem.css";

interface CartItemProps {
  item: CartItemType;
  removeItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeItem }) => {
  return (
    <div className="cart-item">
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
