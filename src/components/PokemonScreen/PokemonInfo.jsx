import React from 'react'
import { useOutletContext, useParams } from 'react-router'
import PokemonInfoInfo from './PokemonInfoInfo';
import PokemonInfoStats from './PokemonInfoStats';

const PokemonInfo = () => {
    const { info } = useParams();
    let pokemon = JSON.parse(JSON.stringify(useOutletContext()));

    switch (info) {
        case 'info':
            return <PokemonInfoInfo />;
        case 'stats':
            return <PokemonInfoStats pokemon={pokemon}/>;
        case 'evolution':
            return <div>{info}</div>;
    }
}

export default PokemonInfo