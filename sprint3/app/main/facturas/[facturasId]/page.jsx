import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

const FacturaDetailPage = () => {
  const router = useRouter();
  const { facturaId } = router.query;

  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Detalle de Factura {facturaId}</h1>
      {/* Contenido del detalle de factura */}
    </div>
  );
};

export default FacturaDetailPage;
