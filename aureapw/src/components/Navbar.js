import React from 'react';
import "../index.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <nav id='cabecera'>
          <ul>
            <li>
              <h1>Florida Aurea</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Quienes_Somos">Quienes_Somos</Link>
            </li>
            <li>
              <Link to="/Descargar_App">Descargar_App</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
};

export default Navbar;