import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/header/Header'
import {Route, Routes} from 'react-router-dom'
import {HomePage} from './pages/HomePage/HomePage'
import {CatalogPage} from './pages/CatalogPage/CatalogPage'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
      </Routes>
    </>
  )
}

export default App
