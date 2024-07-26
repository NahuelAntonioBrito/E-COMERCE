import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  width: number;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, closeMenu, width }) => {
  return (
    <div
      className={`side-menu ${isOpen ? "open" : ""}`}
      style={{ width: `${width}px` }}
    >
      <div className="side-menu-content">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/ProductManager" onClick={closeMenu}>
          Product Manager
        </Link>
        <Link to="/user-profile" onClick={closeMenu}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
