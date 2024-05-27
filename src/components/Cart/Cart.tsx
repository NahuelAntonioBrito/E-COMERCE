import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Error: CartContext not found</div>;
  }

  const { cart, clearCart, removeItem } = cartContext;

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Tu Carrito</h1>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeItem={() => removeItem(item.id)}
        />
      ))}
      <div className="cart-summary">
        <button onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout" className="option">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
