import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);

  useEffect(() => {
    document.body.classList.add("cart-page");
    return () => {
      document.body.classList.remove("cart-page");
    };
  }, []);

  if (!cartContext) {
    return <div>Error: CartContext not found</div>;
  }

  const { cart, clearCart, removeItem } = cartContext;

  if (cart.length === 0) {
    return (
      <div className="cartsEmpty">
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="option">
          Productos
        </Link>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <table className="table-cart">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.title} className="cartImage" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="removeButton"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="tfoot-left">
              Total
            </td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
      <div className="cart-summary">
        <button className="clearButton" onClick={clearCart}>
          Clear Cart
        </button>
        <Link to="/checkout" className="option">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
