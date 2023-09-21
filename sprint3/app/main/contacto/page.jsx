import React from 'react';
import FormularioSoporte from '/components/Contacto'; // Asumiendo que la ruta del componente es correcta
import Sidebar from '/components/Sidebar'; // Asumiendo que la ruta del componente es correcta
import Header from '/components/Header'; // Asumiendo que la ruta del componente es correcta

function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Bienvenido a nuestro homebanking</h1>
      <p>Por favor, contáctanos si tienes alguna pregunta o comentario:</p>
      <FormularioSoporte />
    </div>
  );
}

export default Home;
