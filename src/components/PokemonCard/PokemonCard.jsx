import usePokemon from "../../hooks/usePokemon";

const PokemonCard = ({ url }) => {
    const pokemon = usePokemon(url);

    return (
        <article className='PokemonCard'>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites.other.dream_world.front_default || pokemon?.sprites.other['official-artwork'].front_default || pokemon?.sprites.other.home.front_default || 'https://i.imgur.com/dWukdOq.png'} alt={pokemon?.name}/>
            <ul>
                <li>{pokemon?.id}</li>
            </ul>
        </article>
    )
}

export default PokemonCard