import { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function App() {

  const userName = useSelector(store => store.userName)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home userName={userName} />} />
        <Route element={<ProtectedRoutes userName={userName} />}>
          <Route path='/pokedex' element={<Pokedex userName={userName}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
