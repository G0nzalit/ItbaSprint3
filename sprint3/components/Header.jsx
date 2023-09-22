import React from 'react';
import Image from 'next/image';
import Logo from './logotipo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderContent">
        <div className="TextContainer">
          <h1>Banco Argentino Sin Inflación</h1>
        </div>
        <div className="LogoContainer">
          <Image
            src={Logo}
            alt="logo del banco"
            width={256}
            height={146}
            className="LogoImage"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
