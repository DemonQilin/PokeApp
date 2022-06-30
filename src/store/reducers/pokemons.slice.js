import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        setGlobalPokemons: (store, action) => action.payload
    }
});

export const getPokemons = (url, typeRequest) => async dispatch => {
    try {
        const data = await axios.get(url).then(res => typeRequest ? res.data.pokemon : res.data.results);
        return dispatch(setGlobalPokemons(data));
    } catch (error) {
        console.log(error)
    }
}

export const { setGlobalPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;