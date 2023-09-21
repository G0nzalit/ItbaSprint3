import React from 'react';
import Image from 'next/image'; // Importa la etiqueta <Image> de Next.js
import Logo from './logotipo.png'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        {/* Utiliza <Image> en lugar de <img> */}
        <Image
          src={Logo}
          alt="logo del banco"
          
        />
        <h1>Nombre del Banco</h1>
      </div>
    </header>
  );
};

export default Header;
