import React from 'react'
import './InputPalabra.css'
function InputPalabra({ referencia}) {
  return (
    <div>
        <h2>Palabra:</h2>
        <label>
            <input type="text" placeholder='Escriba una palabra...' ref={referencia}/>
        </label>
    </div>
  )
}

export default InputPalabra;
