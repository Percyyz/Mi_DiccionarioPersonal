import { useRef, useState } from 'react';
import './App.css';
import Titulo from './Titulo';
import InputPalabra from './InputPalabra';
import InputSignificado from './InputSignificado';
import BotonGuardar from './BotonGuardar';

function App() {

  const palabraRef=useRef(null);
  const significadoRef=useRef(null);

  const [lista, setLista]=useState([]);

  const [seleccionado, setSeleccionado]=useState(null);

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
      
      <h3>Palabras Guardadas</h3>
      <ul>
        {lista.map((item, index) => (
          <li 
            key={index}
            onClick={() => {
              if (seleccionado === item) {
                setSeleccionado(null);
              } else {
                setSeleccionado(item);
              }
            }}
            style={{ cursor: "pointer", marginBottom: "8px" }}
          >
            {item.palabra}
          </li>
        ))}
      </ul>

      {seleccionado && (
        <div>
          <h3>Significado:</h3>
          <p>{seleccionado.significado}</p>
        </div>
      )}
    </div>
  )
}

export default App
