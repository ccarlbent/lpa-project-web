import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Footer from './components/Footer';
import Product from './components/Product/Product';




function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<about/>}/>
          <Route path='/contacts' element={<Footer/>}/>
        </Routes>
      </div>
    </Router>
  )
  
}

export default App;
