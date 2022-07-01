import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import { getPokemons } from '../../store/reducers/viewPokemons.slice';
import Pagination from '../Pagination/Pagination';
import PokemonCard from '../PokemonCard/PokemonCard';
import FormSearch from './FormSearch';
import FormType from './FormType';

const Pokedex = ({ userName }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    
    useEffect(() => {
        dispatch(getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154', true));
    }, [dispatch]);

    const { currentPage, setCurrentPage, viewPokemons, quantityPages, pages, currentBlock, setCurrentBlock, pagesPerBlock } = usePagination();

    return (
        <section className="Pokedex">
            <h1>Pokedex</h1>
            <p>Entrenador {userName}, aqui puedes encontrar tu pokemon favorito.</p>
            <FormSearch setSearch={setSearch} />
            <FormType />
            {/* {search && <p>Resultados para búsqueda de "{search}"</p>} */}
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
                {viewPokemons?.map(pokemon => <PokemonCard key={pokemon.url ? pokemon.url : pokemon.pokemon.url} url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />)}
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