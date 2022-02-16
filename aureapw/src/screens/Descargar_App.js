import React from 'react';
import "../index.css";
import QR from "../assets/img/QR.jpeg";
import Footer from '../components/Footer';

const Descargar_App = () => {

    return (
        <div>
            <body id='contenedorCentrar'>
                <h1 id='contenedorTituloDescargarApp'><a id='linkApp' href="https://drive.google.com/file/d/1sMh34_4lJMuLHPxLOiPTzn4KeR54WkOh/view?usp=sharing">Descargar App</a></h1>
                <img id='qr' src={QR}></img>
            </body>
            <Footer />
        </div>

    )
};

export default Descargar_App;