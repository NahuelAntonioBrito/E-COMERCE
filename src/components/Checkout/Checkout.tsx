import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

type Props = {};

function Checkout({}: Props) {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return null;
  }

  const { cart, total, clearCart } = cartContext;

  const createOrder = async (name: string, phone: string, email: string) => {
    setLoading(true);
    try {
      const currentDate = new Date();
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: currentDate,
      };

      const orderId = "fakeOrderId";
      setOrderId(orderId);
      clearCart();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se Está Generando la Orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
