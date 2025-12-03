import React from 'react'
import './PalabrasGuardadas.css'

function PalabrasGuardadas({ lista, seleccionado, setSeleccionado }) {
  return (
    <div className='lista-container'>
      <h3>Palabras Guardadas</h3>

      <ul>
        {lista.map((item, index) => (
          <li 
            key={index}
            className="palabra-item-container"
          >

            {/* PALABRA */}
            <div
              className="palabra-item"
              onClick={() =>
                setSeleccionado(seleccionado === item ? null : item)
              }
            >
              <strong>{item.palabra}</strong>
            </div>

            {/* SIGNIFICADO */}
            {seleccionado === item && (
              <div className="significado-box">
                {item.significado}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PalabrasGuardadas
