import React from 'react';
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from '../screens/Home';
import Quienes_Somos from '../screens/Quienes_Somos';
import Descargar_App from '../screens/Descargar_App';
import Contacto from '../screens/Contacto';
import NoPage from './NoPage';

const Navegacion = () => {

    return (
      <html>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="Quienes_Somos" element={<Quienes_Somos />} />
              <Route path="Descargar_App" element={<Descargar_App />} />
              <Route path="Contacto" element={<Contacto />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </html>
    )
};

export default Navegacion;