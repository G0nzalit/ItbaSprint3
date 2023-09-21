"use client"
import { useState, useEffect} from 'react'
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

export default function Factura({params}) {
  const { facturaId } = params
  const [ factura, setFactura] = useState({})

  const getFactura = () => {
    fetch(`/statics/facturas/${facturaId}.json`)
    .then(response => { return response.json()
  })
  .then(data => {setFactura(data)
  })
  }

  useEffect(() => {
    getFactura()
  }, [])



  return (
    <div classname="Factura">
      <Header />
      <Sidebar />
      <h2>Soy una Factura</h2>
      <ul>
        <li>
          <b>Cliente:</b> {factura.cliente}
        </li>








      </ul>
    </div>

  )
  }