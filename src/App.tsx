import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ProductManager from "./components/ProductManager/ProductManager";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import UserRegistrationForm from "./components/UserRegistrationForm/UserRegistrationForm";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/UserProfile/UserProfile";
import { CartProvider } from "./context/CartProvider";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ProductManager" element={<ProductManager />} />
            <Route path="/register" element={<UserRegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
