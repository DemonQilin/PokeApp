import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { setGlobalViewPokemons } from '../../store/reducers/viewPokemons.slice';

const FormSearch = ({setSearch}) => {
    const pokemons = useSelector(store => store.pokemons);
    const dispatch = useDispatch();

    const validateInput = (valueInput, nameInput, errorsState) => {
        const regexpSearch = /^[A-Za-z-]{4,40}$/;

        if (!valueInput) {
            errorsState[nameInput] = 'Debes ingresar un nombre'
        } else if (!regexpSearch.test(valueInput)) {
            errorsState[nameInput] = 'Debe contener minimo 4 y máximo 40 caracteres (letras y/o guión)';
        } else {
            delete errorsState[nameInput]
        }

        return errorsState
    }

    const actionForm = ($form, formState) => {
        dispatch(setGlobalViewPokemons(pokemons.filter(el => new RegExp(formState.searchName, 'i').test(el.name))));
        setSearch(formState.searchName);
        $form.searchName.blur();
    }

    const { form, errors, handlerChange, handlerSubmit } = useForm({ searchName: '' }, validateInput, actionForm);

    return (
        <div className="FormSearch" onSubmit={handlerSubmit}>
            <form>
                <input type="search" name="searchName" value={form.searchName} onChange={handlerChange} placeholder="Busca un pokemón" />
                {errors.searchName && <p>{errors.searchName}</p>}
                <input type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default FormSearch