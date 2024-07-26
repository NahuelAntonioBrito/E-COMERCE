import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../public/20191103_095948_24e69159-bfc2-49d6-a8a8-fa0b133663be.jpg";
import "./NavBar.css";

interface NavBarProps {
  openMenu: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ openMenu }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={openMenu}>
          <div className="kame-house-container">
            {"KAME-HOUSE".split("").map((char, index) => (
              <span key={index} className="kame-house-letter">
                {char}
              </span>
            ))}
          </div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="d-flex align-items-center">
          <SearchBar />
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
