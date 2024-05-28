import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cart from "../../../public/carrito-de-compras.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { totalQuantity } = cartContext;

  return (
    <div className="d-flex align-items-center">
      <Link to="/cart">
        <img
          src={cart}
          alt="CartWidget"
          style={{ height: "40px", width: "40px" }}
        />
      </Link>
      <span className="ms-2">{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
