import React from 'react';
import "../index.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {

    return (
        <>
        <nav id='cabecera'>
          <ul>
            <li>
              <img id='logo' src={logo}></img>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Quienes_Somos">Viabilidad</Link>
            </li>
            <li>
              <Link to="/Descargar_App">Descargar App</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
};

export default Navbar;