import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

const AppPage = () => {
  return (
    <div>
      <Header />
      <h1>Página de Landing</h1>
      {<Link href="/login">Login</Link>
      /* Contenido de la página principal de la aplicación */}
    </div>
  );
};

export default AppPage;
