import { configureStore } from "@reduxjs/toolkit";
import userName from './reducers/userName';
import pokemons from './reducers/pokemons.slice';
import viewPokemons from './reducers/viewPokemons.slice';

export default configureStore({
    reducer: {
        userName,
        pokemons,
        viewPokemons
    }
})