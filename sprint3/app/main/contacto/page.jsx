import React from 'react';
import FormularioSoporte from '/components/Contacto'; 
import Sidebar from '/components/Sidebar'; 
import Header from '/components/Header'; 

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
