
import Sidebar from '/components/Sidebar';
import Header from '/components/Header';

export default function Cuenta({params}) {
  const {cuentaId} = params
  return (
    <div classname="Cuenta">
      <Header />
      <Sidebar />

      <h2>Soy una cuenta</h2>
      <h6>Mi id es: {cuentaId}</h6>
    </div>
  
  
  
  
  
  
  
  
  )
  
  
  
  
  
  
  
  
  
  }