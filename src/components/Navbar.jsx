import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link className="navbar-btn" to="/">Inicio</Link></li>
        <li><Link className="navbar-btn" to="/sobre">Sobre</Link></li>
        <li><Link className="navbar-btn" to="/galeria">Galería</Link></li>
        <li><Link className="navbar-btn" to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;