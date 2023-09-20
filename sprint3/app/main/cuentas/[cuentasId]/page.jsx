import React from 'react';
import Header from '../../../../components/Header';
import Sidebar from '../../../../components/Sidebar';
import { appendFile } from 'fs';
import { mainModule } from 'process';

const CuentaDetalle = ({ params }) => {
  const {cuentasId} = params
  return (
    <div>
        <Header />
        <Sidebar />

      <h1>Detalle de la Cuenta</h1>
      <h2>Titular de la Cuenta: {cuenta.accountHolderName}</h2>
      <p>Número de Cuenta: {cuenta.accountNumber}</p>
      <p>Saldo: {cuenta.balance}</p>
      {/* Agrega más detalles y acciones relacionadas con la cuenta */}
    </div>
  );
};

export default CuentaDetalle;



