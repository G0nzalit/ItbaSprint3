"use client"
import React, { useState, useEffect } from 'react';
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

export default function Factura({ params }) {
  const { facturaId } = params;
  const [factura, setFactura] = useState({});

  const getFactura = () => {
    fetch(`/statics/facturas/${facturaId}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFactura(data);
      });
  };

  useEffect(() => {
    getFactura();
  }, []);

  return (
    <div className="Factura">
      <Header />
      <Sidebar />
      <h2>Soy una Factura</h2>
      <ul>
        <li>{factura.cliente}</li>
        <li>
          <b>Fecha de Vencimiento:</b> {factura.fecha}
        </li>
        <li>
          <b>Monto:</b> {factura.monto}
        </li>
        <li>
          <b>Productos:</b>
          <ul>
            {factura.productos &&
              factura.productos.map((producto, index) => (
                <li key={index}>
                  {producto.nombre} - {producto.precio}
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
