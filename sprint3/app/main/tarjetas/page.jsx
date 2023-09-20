// pages/main/tarjetas/page.jsx

import Link from 'next/link';
import tarjetasData from './creditcard.json';

const TarjetasPage = () => {
  return (
    <div>
      <h1>Lista de Tarjetas</h1>
      <ul>
        {tarjetasData.tarjetas.map((tarjeta) => (
          <li key={tarjeta.id}>
            <Link href={`/main/tarjetas/${tarjeta.id}`}>
              <a>{tarjeta.nombre}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TarjetasPage;
