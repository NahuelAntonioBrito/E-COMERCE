import cart from "../../../public/carrito-de-compras.png";

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        src={cart}
        alt="CartWidget"
        style={{ height: "40px", width: "40px" }}
      />
      <span className="ms-2">0</span>
    </div>
  );
};

export default CartWidget;
