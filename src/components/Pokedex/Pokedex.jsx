import React from 'react'
import { useSelector } from 'react-redux'

const Pokedex = ({userName}) => {
    return (
        <div className="Pokedex">
            <h1>Pokedex</h1>
            <p>Entrenador {userName}, aqui puedes encontrar tu pokemon favorito.</p>
        </div>
    )
}

export default Pokedex