import React from 'react'
import { useLocation } from 'react-router'

const PokemonScreen = () => {
    const {pokemon, pokemonImage} = useLocation().state;

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemonImage} alt={pokemon.name} />
            <section>
                <h2>Type</h2>
                <ul>
                    {pokemon.types.map(el => <li key={el.type.url}>{el.type.name}</li>)}
                </ul>
            </section>
            <section>
                <h2>Abilities</h2>
                <ul>
                    {pokemon.abilities.map(el => <li key={el.ability.url}>{el.ability.name}</li>)}
                </ul>
            </section>
            <section>
                <h2>Movimientos</h2>
                <ul>
                    {pokemon.moves.map(el => <li key={el.move.url}>{el.move.name}</li>)}
                </ul>
            </section>
        </div>
    )
}

export default PokemonScreen