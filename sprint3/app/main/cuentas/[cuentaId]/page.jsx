"use client"
import { useState, useEffect} from 'react'
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

export default function Cuenta({params}) {
  const { cuentaId } = params
  const [ cuenta, setCuenta] = useState({})

  const getCuenta = () => {
    fetch(`/statics/cuentas/${cuentaId}.json`)
    .then(response => { return response.json()
  })
  .then(data => {setCuenta(data)
  })
  }

  useEffect(() => {
    getCuenta()
  }, [])



  return (
    <div classname="Factura">
      <Header />
      <Sidebar />
      <h2>Detalles de Cuentas</h2>
      <ul>
        <li>
          <b>Tipo de Cuenta:</b> {cuenta.accountHolderName}
        </li>
        <li>
          <b>Numero:</b> {cuenta.numero}
        </li>
        <li>
          <b>Saldo:</b> {cuenta.saldo}
        </li>







      </ul>
    </div>

  )
  }