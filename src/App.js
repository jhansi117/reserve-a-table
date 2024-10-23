import React from 'react';
import Home from './pages/Home'
import About from './components/About'
import Reservations from './pages/Reservations'
import Menu from './pages/Menu'
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
