import React from 'react';
import Image from 'next/image'; // Importa la etiqueta <Image> de Next.js
import Logo from './logotipo.png'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <Image
          src={Logo}
          alt="logo del banco"
          width={200}
          height={200}

        />
        <h1>Banco Argentino Sin Inflacion</h1>
      </div>
    </header>
  );
};

export default Header;