import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { ContainerHome } from './components/Home/ContainerHome'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContainerHome/>}/>
      </Routes>
    </div>
  )
}

export default App
