
'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';


export default function Cuentas () {

const [cuentas, setCuentas] = useState([])
const getCuentas = () => { 
 
 fetch("/statics/cuentas.json").then(response => {return response.json()})

 .then(data => {setCuentas(data)
      })
      
 
    }
 
 useEffect(() => {getCuentas()}, [])
 
 
  return (
   <div className="Cuentas">
      <Header />
      <Sidebar />
      <h2>Aca van las Cuentas</h2>
      <ul>
      {cuentas.map(t => (
        <li key={`${t.accountHolderName}:${t.numero}`}>
          <Link href={`/main/cuentas/${t.numero}`}>
            {t.accountHolderName}: {t.numero} 
          </Link>
        </li>
      ))}
      </ul>
   </div>
  );
}
