import React from 'react';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import CuentaDetalle from 'app/main/cuentas/[cuentasId]/page';

const CuentasListPage = ({ accounts }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <h1>Listado de Cuentas</h1>
        <CuentaDetalle accounts={accounts} /> {
        <ul>
        {accounts && accounts.length > 0 ? (
          accounts.map((account) => (
            <li key={account.id}>
              <Link href={`/app/cuentas/${account.id}`}>{account.accountHolderName}</Link>
            </li>
          ))
        ) : (
          <li>No hay cuentas disponibles.</li>
        )}
      </ul>}
      </div>S
    </div>
  );
};

export async function getStaticProps() {
  // Ruta al archivo JSON de cuentas
  const cuentasFilePath = path.join(process.cwd(), 'app/main/cuentas/accounts.json');

  try {
    // Leer el contenido del archivo JSON
    const cuentasData = fs.readFileSync(cuentasFilePath, 'utf-8');
    const cuentas = JSON.parse(cuentasData);

    return {
      props: {
        accounts: cuentas.accounts,
      },
    };
  } catch (error) {
    console.error('Error al cargar los datos de cuentas:', error);
    return {
      props: {
        accounts: [],
      },
    };
  }
}


export default CuentasListPage;
