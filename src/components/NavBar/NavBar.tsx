import SearchBar from "../SearchBar";
import CartWidget from "../CartWidget/CartWidget";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
