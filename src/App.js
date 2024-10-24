import React from 'react';
import Home from './pages/Home'
import About from './components/About'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation';
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
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
