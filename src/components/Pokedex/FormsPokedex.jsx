import React, { useEffect, useState } from 'react';
import FormSearch from './FormSearch';
import FormType from './FormType';
import './FormsPokedex.css';

const FormsPokedex = ({ $forms, setSearch, setViewForms }) => {
    const [viewType, setViewType] = useState();
    const [viewSearch, setViewSearch] = useState();

    useEffect(() => {
        setTimeout(() => {
            $forms.current.classList.add('Pokedex__forms--active');
        }, 0)
    }, [])

    return (
        <div className="Pokedex__forms" ref={$forms}>
            {!(viewSearch || viewType) && <button
                className='Pokedex__forms__btn Pokedex__forms__btn--search'
                onClick={e => setViewSearch(true)}
            >
                Search
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>}
            {!(viewSearch || viewType) && <button
                className='Pokedex__forms__btn Pokedex__forms__btn--types'
                onClick={e => setViewType(true)}
            >
                Types
                <div className="Pokedex_forms_pokeball">
                <div className="Pokedex_forms_pokeball_rectangle"></div>
                </div>
            </button>}
            {viewSearch && <FormSearch setSearch={setSearch} setViewForms={setViewForms} />}
            {viewType && <FormType setViewType={setViewType} setViewForms={setViewForms} />}
        </div>
    )
}

export default FormsPokedex