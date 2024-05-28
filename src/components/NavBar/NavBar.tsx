import SearchBar from "../SearchBar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../public/20191103_095948_24e69159-bfc2-49d6-a8a8-fa0b133663be.jpg";
import { Link } from "react-router-dom";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>
        <div className="d-flex align-items-center">
          <SearchBar />
          <button className="btn btn-outline-success ms-2" type="submit">
            Search
          </button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
