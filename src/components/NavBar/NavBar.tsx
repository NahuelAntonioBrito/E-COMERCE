import SearchBar from "../SearchBar/SearchBar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../public/20191103_095948_24e69159-bfc2-49d6-a8a8-fa0b133663be.jpg";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="d-flex align-items-center">
          <SearchBar />
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
