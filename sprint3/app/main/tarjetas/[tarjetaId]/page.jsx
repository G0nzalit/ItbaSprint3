
"use client"
import { useState, useEffect} from 'react'
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

export default function Tarjeta({params}) {
  const { tarjetaId } = params
  const [ tarjeta, setTarjeta] = useState({})

  const getTarjeta = () => {
    fetch(`/statics/tarjetas/${tarjetaId}.json`)
    .then(response => {
      return response.json()
  })
  .then(data => {setTarjeta(data)
    console.log('Datos obtenidos:', data);
  })
  }

  useEffect(() => {
    getTarjeta()
  }, [])






  return (
    <div classname="Tarjeta">
      <Header />
      <Sidebar />
      <h2>Soy una Tarjeta</h2>
      <ul>
        <li>
          <b>Empresa:</b> {tarjeta.empresa}
        </li>
        <li>
          <b>Numero:</b> {tarjeta.numero}
        </li>
        


        </ul>
    </div>
  )

  }