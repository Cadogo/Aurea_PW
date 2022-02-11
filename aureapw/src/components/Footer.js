import React from 'react';
import "../index.css";
import logo from "../assets/img/logo.png";

const Footer = () => {

    return (
        <footer id='contenedorFooter'>
            <section>
                <article id='participantes'>
                    <p>Equipo de desarrollo</p>
                    <p>Carlos Dolz</p>
                    <p>Oscar Talavera</p>
                    <p>Nestor Roldan</p>
                    <p>Adrian Amore</p>
                    <p>Yosu Litago</p>
                </article>
                <article id='copyright'>
                    <img id='logoFooter' src={logo}></img>
                    <p> Florida Aurea 2022 © </p>
                </article>
            </section>
        </footer>
    )
};

export default Footer;