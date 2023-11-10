import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./navbar.css"
import logo from "./logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-right">
        <a href="/">Inicio</a>
        <a href="/login">Iniciar Sesión</a>
        <a href="/register">Registrarse</a>
      </div>
    </nav>
  );
};

export default Navbar;