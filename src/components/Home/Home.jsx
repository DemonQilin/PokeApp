import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import FormName from './FormName'
import './Home.css'

const Home = ({userName}) => {
    return (
        <div className='Home'>
            <h2>¡Bienvenido entrenador!</h2>
            <p>Introduce tu nombre y sigue adelante</p>
            <FormName />
            {userName && <Navigate to='/pokedex'/>}
        </div>
    )
}

export default Home