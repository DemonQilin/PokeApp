import React from 'react'

const PokemonInfoStats = ({pokemon}) => {
    return (
        <>
            <section className="PokemonInfoStats">
                <ul className="PokemonInfoStats__List">
                    {pokemon?.stats.map(stat => (
                        <li className="PokemonInfoStats__Item" key={stat.stat.name}>
                            <span>{stat.stat.name.replace(stat.stat.name[0], stat.stat.name[0].toUpperCase())}:</span> {stat.base_stat}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default PokemonInfoStats