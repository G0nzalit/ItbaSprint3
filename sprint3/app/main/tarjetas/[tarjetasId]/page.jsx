// pages/main/tarjetas/[tarjetasId].jsx

import { useRouter } from 'next/router';
import tarjetasData from './creditcard.json';

const TarjetaPage = () => {
  const router = useRouter();
  const { tarjetasId } = router.query;

  // Busca la tarjeta correspondiente en los datos
  const tarjeta = tarjetasData.tarjetas.find(t => t.id === tarjetasId);

  if (!tarjeta) {
    return <div>Tarjeta no encontrada</div>;
  }

  return (
    <div>
      <h1>{tarjeta.nombre}</h1>
      <p>Límite de crédito: {tarjeta.limite}</p>
    </div>
  );
};

export default TarjetaPage;
