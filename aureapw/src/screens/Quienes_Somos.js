import React from 'react';
import "../index.css";
import Footer from '../components/Footer';
import Viabilidad_economica from '../assets/img/Viabilidad_economica.jpg';
import Viabilidad_humana from '../assets/img/Viabilidad_humana.jpg';
import Viabilidad_tecnica from '../assets/img/Viabilidad_tecnica.PNG';

const Quienes_Somos = () => {

    return (
        <div>
            <body>
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"><img src={Viabilidad_economica}></img></div>
                    </div>
                    <div class="description">
                        <h1>Viabilidad Económica</h1>
                        <p>• La viabilidad económica del proyecto es su fuerte, ya que la aplicación con su desarrollo completado se podría adaptar a otras fábricas y ayudar a las industrias a llegar a la cuarta revolución industrial. La cuarta revolución industrial se basa en una evolución de las fábricas para adaptarse al big data y la interconexión a gran escala de sistemas y dispositivos.</p>
                        <p>• Dentro de poco una fábrica sin esos avances tecnológicos estará obsoleta. Al tener que estar conectadas la aplicación es una forma sencilla en la que recibir e interpretar los datos de la fábrica.</p>
                        <p>• Además la aplicación nace en el eje del mediterraneo una de las cinco zonas más importantes para España en cuanto a industria se refiere. Lo que hace que la aplicación tenga mucha clientela potencial. Un servicio parecido como Grafana cuesta 50 euros más uso para uso personal y se requiere contactar para saber el costo de grafana para una empresa. Otras aplicaciones parecidas cuestan desde 1000 hasta 1600 euros.</p>
                        {/* <p>• Por lo tanto deja una oportunidad de mercado a Aurea ya que se pueden reducir mucho los costes. También hay que tener en cuenta la inversión que aunque no se requiere una gran cantidad hace falta para los servicios remotos como servidores.</p> */}
                    </div>
                </div>
                <div class="blog-card alt">
                    <div class="meta">
                        <div class="photo"><img src={Viabilidad_humana}></img></div>
                    </div>
                    <div class="description">
                        <h1>Viabilidad Humana</h1>
                        <p>• La viabilidad humana del proyecto es posible ya que aunque hay que documentarse dado el desconocimiento del protocolo mosquitto, la mayoría de conocimientos ya los tenemos y no es un problema.</p>
                    </div>
                </div>
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"><img src={Viabilidad_tecnica}></img></div>
                    </div>
                    <div class="description">
                        <h1>Viabilidad Técnica</h1>
                        <p>• La viabilidad técnica del proyecto es posible, ya las herramientas que hemos utilizado para hacer el proyecto integrado, han sido las siguientes:</p>
                        <p>- React Native: esta herramienta la hemos utilizado, para crear la aplicación, que será la base de nuestro proyecto integrado.</p>
                        <p>- Mosquito Broker MQTT: esta herramienta la hemos utilizado para conectar las variables que nosotros recibimos a través de los sensores y mostrarlo en tiempo real en nuestra aplicación.</p>
                        <p>- Java: esta herramienta la hemos utilizado para crear una API de prueba y comprobar si la aplicación funciona correctamente.</p>
                        <p>• Todas las herramientas que hemos utilizado las hemos testeado nosotros mismos, para saber si todo funciona correctamente.</p>
                    </div>
                </div>
            </body>
            <Footer />
        </div>
    )
};

export default Quienes_Somos;