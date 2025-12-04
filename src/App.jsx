import { useRef, useState } from 'react';
import './App.css';
import Titulo from './Titulo';
import InputPalabra from './InputPalabra';
import InputSignificado from './InputSignificado';
import BotonGuardar from './BotonGuardar';
import PalabrasGuardadas from './PalabrasGuardadas';

function App() {

  const palabraRef=useRef(null);
  const significadoRef=useRef(null);

  const [lista, setLista]=useState([]);

  const [seleccionado, setSeleccionado]=useState(null);

  const eliminarPalabra = (index) => {
  setLista(lista.filter((_, i) => i !== index));
  setSeleccionado(null); // para cerrar el panel si se elimina
};

  const guardarPalabra=()=>{
    const palabra=palabraRef.current.value;
    const significado=significadoRef.current.value;

    if(palabra.trim()=== ''|| significado.trim()=== ''){
      alert('Por favor complete ambos campos.');
      return;
    }
    setLista([...lista, {palabra, significado}]);
    palabraRef.current.value='';
    significadoRef.current.value='';
  }

  return (
    <div className='principal'>
      <Titulo/>
      <InputPalabra referencia={palabraRef}/>
      <InputSignificado referencia={significadoRef}/>
      <div onClick={guardarPalabra}>
        <BotonGuardar/>
      </div>
      
      <hr />
      
      <PalabrasGuardadas
        lista={lista}
        seleccionado={seleccionado}
        setSeleccionado={setSeleccionado}
        eliminarPalabra={eliminarPalabra}
      />
    </div>
  )
}

export default App
