
import React from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import CalculadoraPrestamos from '../../../components/Prestamos';

function PrestamosPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Página de Préstamos</h1>
      <CalculadoraPrestamos />
    </div>
  );
}

export default PrestamosPage;
