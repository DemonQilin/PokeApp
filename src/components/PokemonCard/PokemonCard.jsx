import { useState } from "react";
import { Navigate } from "react-router";
import usePokemon from "../../hooks/usePokemon";

const PokemonCard = ({ url }) => {
    const [info, setInfo] = useState(false);
    const pokemon = usePokemon(url);
    const pokemonImage = pokemon?.sprites.other.dream_world.front_default || pokemon?.sprites.other['official-artwork'].front_default || pokemon?.sprites.other.home.front_default || 'https://i.imgur.com/dWukdOq.png';

    return (
        <article className='PokemonCard'>
            <h2>{pokemon?.name}</h2>
            <img src={pokemonImage} alt={pokemon?.name}/>
            <ul>
                <li>{pokemon?.id}</li>
            </ul>
            <button onClick={e => setInfo(true)}>Ver más</button>
            {info && <Navigate to={`/pokedex/${pokemon?.id}`} state={{ pokemon, pokemonImage }} />}
        </article>
    )
}

export default PokemonCard