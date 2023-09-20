
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';


export default function Tarjetas () {

const [tarjetas, setTarjetas] = useState([])
const getTarjetas = () => { 
 
 fetch("/statics/tarjetas.json").then(response => {return response.json()})

 .then(data => {setTarjetas(data)
      })
      
 
    }
 
 useEffect(() => {getTarjetas()}, [])
 
 
  return (
   <div className="Tarjetas">
      <Header />
      <Sidebar />
      <h2>Aca van las tarjetas</h2>
      <ul>
      {Tarjetas.map(t => (
        <li key={`${t.empresa}:${t.numero}`}>
          <Link href={`/main/tarjetas/${t.numero}`}>
            {t.empresa}: {t.numero} 
          </Link>
        </li>
      ))}
      </ul>
   </div>
  );
}
