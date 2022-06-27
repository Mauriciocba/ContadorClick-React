import './App.css';
import clic_logo from './imagenes/clic.png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador' 
import {useState} from 'react'

function App() {

  const [contador,setContador] = useState(0); 

const manejarClic = () => {
  setContador(contador + 1) 
}

const reiniciarContador = () => {
  setContador(0)
}
  return (
    <div className='App'>
     <div className='logo-contenedor'>
        <img className='loco-clic' src={clic_logo} alt='logo-clic' />
     </div>

     <div className='contenedor-principal'>
        <Contador contador={contador} />
        <Boton
        texto='Clic'
        esBotonClic={true}
        manejarClic={manejarClic}
        />

        <Boton
        texto='Reiniciar'
        esBotonClic={false}
        manejarClic={reiniciarContador}
        />

        
      </div>
    </div>
  );
}

export default App;
