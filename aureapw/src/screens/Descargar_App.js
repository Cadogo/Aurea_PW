import React from 'react';
import "../index.css";
import QR from "../assets/img/QR.png";
import Footer from '../components/Footer';

const Descargar_App = () => {

    return (
        <div>
            <body id='contenedorCentrar'>
                <h1 id='contenedorTituloDescargarApp'><a id='linkApp' href="https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran">Descargar App</a></h1>
                <img id='qr' src={QR}></img>
            </body>
            <Footer />
        </div>

    )
};

export default Descargar_App;