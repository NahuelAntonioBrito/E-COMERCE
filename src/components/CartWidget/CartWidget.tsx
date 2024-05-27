import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import cart from "../../../public/carrito-de-compras.png";

const CartWidget = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null; // Manejar el caso en que el contexto no esté disponible
  }

  const { totalQuantity } = cartContext;

  return (
    <div className="d-flex align-items-center">
      <img
        src={cart}
        alt="CartWidget"
        style={{ height: "40px", width: "40px" }}
      />
      <span className="ms-2">{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
