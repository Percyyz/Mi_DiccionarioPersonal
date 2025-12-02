import React from 'react'
import './InputSignificado.css'

function InputSignificado({ referencia }) {
  return (
    <div>
        <h2>Significado: </h2>
        <label>
            <textarea rows='2' cols='30' placeholder='Ingrese el significado...' ref={referencia}></textarea>
        </label>
    </div>
  )
}

export default InputSignificado
