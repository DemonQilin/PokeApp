import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { usePagination } from '../../hooks/usePagination';
import { getPokemons } from '../../store/reducers/pokemons.slice';
import Pagination from '../Pagination/Pagination';
import PokemonCard from '../PokemonCard/PokemonCard';

const Pokedex = ({ userName }) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'));
    }, [dispatch]);

    const { currentPage, setCurrentPage, viewPokemons, quantityPages, pages, currentBlock,setCurrentBlock, pagesPerBlock } = usePagination();

    return (
        <section className="Pokedex">
            <h1>Pokedex</h1>
            <p>Entrenador {userName}, aqui puedes encontrar tu pokemon favorito.</p>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                quantityPages={quantityPages}
                pages={pages}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
                pagesPerBlock={pagesPerBlock}
            />
            <section className='Pokedex__container'>
                {viewPokemons?.map(pokemon => <PokemonCard key={pokemon.url} url={pokemon.url} />)}
            </section>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                quantityPages={quantityPages}
                pages={pages}
                currentBlock={currentBlock}
                setCurrentBlock={setCurrentBlock}
                pagesPerBlock={pagesPerBlock}
            />
        </section>
    )
}

export default Pokedex