import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Pagelayout from './components/Layout/Pagelayout';
//import Product from './components/Product/Product';

function App() {
  return (
    <Router>
        <Routes>
        <Route path='' element={<Pagelayout/>}>
          <Route index element={<home/>}/>
          <Route path='/about' element={<about/>}/>
          <Route path='/blogs' element={<blogs/>}/>
          <Route path='/contacts' element={<contacts/>}/>
          <Route path='' element={<Signup/>}/>
        </Route>
        </Routes>
    </Router>
  )
  
}

export default App;
