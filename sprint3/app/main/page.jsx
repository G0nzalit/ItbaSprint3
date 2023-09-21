"use client"
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';
import React, { useState, useRef, useEffect } from 'react';

function Promocion({ titulo, descripcion }) {
  return (
    <div className="promocion">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}



function TasasDeCambio() {
  const [resultado, setResultado] = useState('');
  const [tasasDeCambio, setTasasDeCambio] = useState({});

  const montoInput = useRef(null);
  const monedaSelect = useRef(null);

  function convertir() {
    const montoValue = parseFloat(montoInput.current.value);
    const monedaValue = monedaSelect.current.value;
    let resultadoValue;

    if (tasasDeCambio[monedaValue]) {
      resultadoValue = (montoValue * tasasDeCambio[monedaValue]).toFixed(2) + ' ' + monedaValue;
    } else {
      resultadoValue = '';
    }

    setResultado(resultadoValue);
  }

  useEffect(() => {
    const url = `https://api.exchangerate-api.com/v4/latest/USD`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTasasDeCambio(data.rates);
      })
      .catch(error => console.error('Error al obtener las tasas de cambio:', error));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="tasas-de-cambio">
        <h2>Tasas de Cambio</h2>
        <form>
          <label htmlFor="monto">Monto:</label>
          <input type="number" id="monto" ref={montoInput} />

          <label htmlFor="moneda">Moneda:</label>
          <select id="moneda" ref={monedaSelect}>
            {Object.keys(tasasDeCambio).map(moneda => (
              <option key={moneda} value={moneda}>
                {moneda}
              </option>
            ))}
          </select>

          <button type="button" id="convertirBtn" onClick={convertir}>
            Convertir
          </button>
        </form>

        <p id="resultado">Resultado: {resultado}</p>
      </div>
      <section id="novedades">
      <h2>Novedades</h2>
      <p>El BCRA dispuso nuevas medidas referentes a canje y/o arbitraje de moneda extranjera y consumos y retiros de efectivo en el exterior con tarjetas de débito. Vigencia 06/05/2016.</p>
      <p>Nuestro banco incorpora una nueva funcionalidad en su módulo de Comercio Exterior de Online Banking Cash Management.</p>
    </section>
    
    <section id="promociones">
            <h2>Promociones para ti</h2>
            <div className="Promocion">
              <Promocion titulo="Depósito a plazo fijo" descripcion="Tasa preferencial 4% por 3 meses." />
            </div>
            <div className="Promocion">
              <Promocion titulo="Seguro para tu auto" descripcion="20% de descuento en tu seguro anual." />
            </div>
            <div className="Promocion">
              <Promocion titulo="Préstamos personales" descripcion="Sin interés por 3 meses." />
            </div>
          </section>

    </div>
  );
}

export default TasasDeCambio;
