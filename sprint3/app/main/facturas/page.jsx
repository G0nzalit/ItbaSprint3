import React from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';


const FacturasPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Lista de Facturas</h1>
      {/* Contenido de la lista de facturas */}
    </div>
  );
};

export default FacturasPage;
