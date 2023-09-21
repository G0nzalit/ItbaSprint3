"use client"
import { useEffect, useState } from 'react';
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';
import Link from 'next/link';

function FacturasList() {
  const [facturasData, setFacturasData] = useState([]);

  useEffect(() => {
    fetch('/statics/facturas.json')
      .then((response) => response.json())
      .then((data) => setFacturasData(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <h1>Lista de Facturas</h1>
      <ul>
      
      {facturasData.map((factura) => (
          <li key={`${factura.cliente}:${factura.fecha}`}>
            <Link href={`/main/facturas/${factura.id}`}>
              {factura.cliente}: {factura.fecha}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacturasList;
