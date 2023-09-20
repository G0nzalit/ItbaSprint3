import React from 'react';
import Header from '/components/Header';
import Link from 'next/link';

const AppPage = () => {
  return (
    <div>
      <Header />
      <h1>Página de Inicio de Sesion</h1>
      {<
        
        
        
        
        
        
        ul>
        <li>
          <Link href="/main">Iniciar Sesion</Link>
        </li>
        <li>
          <Link href="/">Volver al Landing</Link>
        </li>
        </ul>
        
      /* Contenido de la página principal de la aplicación */}
    </div>
  );
};

export default AppPage;
