import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getPokemons } from '../../store/reducers/pokemons.slice';

const FormType = () => {
    const [types, setTypes] = useState();
    const dispatch = useDispatch();
    const $select = useRef();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => {
                res.data.results.unshift({
                    name: 'Todos',
                    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
                });
                res.data.results.forEach(el => el.name = el.name.replace(el.name[0], el.name[0].toUpperCase()));
                setTypes(res.data.results);
            })
            .catch(error => console.log(error))
    }, []);

    
    
    const { form, handlerChange, handlerSubmit } = useForm({ type: 'Todos' }, () => { return {} });

    useEffect(() => {
        const type = types?.find(el => el.name === form.type);

        if (type) dispatch(getPokemons(type.url, type.name !== 'Todos'));
        $select.current.blur();
    }, [form]);
    
    return (
        <>
            <form className="FormType">
                <select ref={$select} name="type" value={form.type} onChange={handlerChange}>
                    {types?.map(type => <option
                        key={type.url}
                        value={type.name}
                    >{type.name}
                    </option>)}
                </select>
            </form>
        </>
    )
}

export default FormType