import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cart from "../../../public/carrito-de-compras.png";
import { Link } from "react-router-dom";
import "./CartWidget.css"; // Import the CSS file

const CartWidget = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { totalQuantity } = cartContext;

  return (
    <div className="cart-widget-container">
      <Link to="/cart" className="cart-link">
        <img src={cart} alt="CartWidget" className="cart-icon" />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
