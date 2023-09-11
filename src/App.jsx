import { useEffect, useState } from 'react'
import './App.css'
import {  collection, getDocs } from 'firebase/firestore'
import { db } from './FirebaseConfig'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/Query/Query.css'
import Categoria from './Categoria/Categoria'
import Pedidos from './Pedidos/Pedidos'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route  path={"/"} element={<Categoria />}  /> 
    <Route  path={"/categoria/:categoria"} element={<Categoria />}  /> 
    <Route  path={"/pedidos"} element={<Pedidos />}  /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
