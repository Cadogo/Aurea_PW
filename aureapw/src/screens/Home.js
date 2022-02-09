import React from 'react';
import "../index.css";

const Home = () => {

    return (
        <div>
            <h1>¿Qué es Florida Aurea?</h1>
            <p>Florida Aurea es un conjunto de proyectos en los que uniremos fuerzas los ciclos de Robótica, Mecatrónica, ASIR y DAM.
Nosotros al ser el departamento de DAM nos encargamos de la aplicación móvil que mostrará una serie de variables que gestionan las máquinas que gestiona el departamento de robótica y que contienen los sensores de los departamentos de mecatrónica que envían la información a una base de datos de tipos "brocker MQTT" con la que nos conectamos y tomamos la información desde esta base de datos.</p>
            <h2>Objetivos</h2>
            <p>El objetivo es realizar una aplicación móvil adaptada para los compañeros de robótica y mecatrónica completamente funcional y con la información que necesitan. La aplicación debe estar conectada a una base de datos con la que recogerá la información de la máquina.
Uno de los problemas que hay es la comunicación con los demás grupos ya que cada uno está en un edificio diferente y que un cambio o retraso de cualquier equipo puede repercutir en el trabajo de los equipos restantes. La solución al problema es sincronizarnos todos los equipos con una metodología ágil y unos objetivos claros que deben cumplirse para no entorpecer el trabajo del resto de grupos.</p>
        </div>
    )
};

export default Home;