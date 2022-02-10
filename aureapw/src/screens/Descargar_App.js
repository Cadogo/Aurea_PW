import React from 'react';
import "../index.css";
import QR from "../assets/img/QR.png";

const Descargar_App = () => {

    return (
        <div id='contenedorCentrar'>
            <h1 id='contenedorTitulo'>Descargar App</h1>
            <img id='qr' src={QR}></img>
            {/* <a href="https://www.xataka.com">Descarga</a> */}
        </div>
    )
};

export default Descargar_App;