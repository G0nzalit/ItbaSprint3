import React from 'react';
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Página Principal de la Aplicación</h1>
      {/* Contenido de la página principal de la aplicación */}
    </div>
  );
};

export default MainPage;
