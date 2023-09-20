import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/main">Home</Link>
        </li>
        <li>
          <Link href="/main/facturas">Facturas</Link>
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
