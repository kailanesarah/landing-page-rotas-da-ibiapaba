import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../../css/components/header.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile Menu Button */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="menu-button"
          onClick={toggleMenu}
          style={{ color: "white" }}
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>

        {/* Menu Items */}
        <div className={`menu-container ${isOpen ? "open" : ""}`}>
          {isOpen && (
            // biome-ignore lint/a11y/useButtonType: <explanation>
            <button className="close-button" onClick={toggleMenu}>
              <X className="icon-close" style={{ color: "white" }} />
            </button>
          )}
          <ul className="menu-list">
          
            <li>
              <a href="#solution" onClick={() => setIsOpen(false)}>
                Soluções
              </a>
            </li>
            <li>
              <a href="#security" onClick={() => setIsOpen(false)}>
                Segurança
              </a>
            </li>
            <li>
              <a href="#partners" onClick={() => setIsOpen(false)}>
                Parcerias
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => setIsOpen(false)}>
                Perguntas (FAQ)
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Entre em contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
