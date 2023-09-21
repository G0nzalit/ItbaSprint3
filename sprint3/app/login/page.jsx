import React from 'react';
import Header from '/components/Header';
import Link from 'next/link';
import LoginForm from 'components/LoginForm';

const AppPage = () => {
  return (
    <div>
      <Header />
      <h1>Página de Inicio de Sesion</h1>
        <LoginForm />
        
        
        
        
        
        
       { <ul>
        <li>
          <Link href="/">Volver al Landing</Link>
        </li>
        </ul>
        
      /* Contenido de la página principal de la aplicación */}
    </div>
  );
};

export default AppPage;
