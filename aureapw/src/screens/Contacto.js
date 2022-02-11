import React from 'react';
import "../index.css";
import Footer from '../components/Footer';

const Contacto = () => {

    return (
        <div>
            <body>
                <div class="contenedorContacto">
                    <h2>Contacto</h2>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder="Introduce tu email"/>
                        <input type="text" name="name" id="name" placeholder="Introduce tu nombre"/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Introduce el mensaje aquí"></textarea>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
            </body>
            <Footer/>
        </div>
    )
};

export default Contacto;