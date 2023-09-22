import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';

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
      <h1 style={{ textAlign: 'center' }}>Bienvenido</h1>
      <div style={{ textAlign: 'center' }}>
        <Link legacyBehavior href="/login">
          <a style={{ textDecoration: 'none' }}>
            <button style={buttonStyle} type="submit">
              Online Banking
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AppPage;
