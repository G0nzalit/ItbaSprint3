import React from 'react';
import Link from 'next/link';
import './Header.css';

const Sidebar = () => {
  return (
    <nav className='menu'>
      <ul className='menuL'>
        <li className='menuLi'>
          <Link href="/main">Home</Link>
        </li>
        <li>
          <Link href="/main/facturas">Pagos</Link>
        </li>
        <li>
          <Link href="/main/cuentas">Cuentas</Link>
        </li>
        <li>
          <Link href="/main/tarjetas">Tarjetas</Link>
        </li>
        <li>
          <Link href="/main/prestamos">Préstamos</Link>
        </li>
        <li>
          <Link href="/main/contacto">Contacto</Link>
        </li>
        <li>
          <Link href="/login">Cerrar Sesion</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Sidebar;