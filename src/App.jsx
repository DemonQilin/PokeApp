import Home from './components/Home/Home'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router'
import PokemonScreen from './components/pokemonsScreen.jsx/PokemonScreen'

function App() {

  const userName = useSelector(store => store.userName)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home userName={userName} />} />
        <Route element={<ProtectedRoutes userName={userName} />}>
          <Route path='/pokedex' element={<Pokedex userName={userName} />} />
          <Route path='/pokedex/:id' element={<PokemonScreen/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
