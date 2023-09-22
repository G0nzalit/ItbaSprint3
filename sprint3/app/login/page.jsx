import React from 'react';
import Header from '/components/Header';
import Link from 'next/link';
import LoginForm from 'components/LoginForm';

const AppPage = () => {
const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
    textAlign: 'center',
    
  };

  return (
    <div>
      <Header />
      <h1>Página de Inicio de Sesion</h1>
        <LoginForm />
       
       { 
        
        <Link legacyBehavior href="/login">
          <a style={{ textDecoration: 'none' }}>
            <button style={buttonStyle} type="submit">
             Volver Al Inicio
            </button>
          </a>
        </Link>
        
        
      /* Contenido de la página principal de la aplicación */}
    </div>
  );
};

export default AppPage;
