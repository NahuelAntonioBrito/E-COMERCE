import { useState, useEffect } from "react";
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
import SideMenu from "./components/SideMenu/SideMenu";
import { CartProvider } from "./context/CartProvider";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.clientX < 50) {
      // Start dragging only if the initial click is near the left edge
      setDragging(true);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const newWidth = Math.min(Math.max(200, e.clientX), 400);
      setMenuWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    if (menuWidth < 200) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, menuWidth]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="main-component" onMouseDown={handleMouseDown}>
          <NavBar openMenu={openMenu} />
          <SideMenu isOpen={menuOpen} closeMenu={closeMenu} width={menuWidth} />
          {menuOpen && <div className="overlay" onClick={closeMenu} />}
          <div className={`content ${menuOpen ? "blurred" : ""}`}>
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
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
