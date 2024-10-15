import './App.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Pagelayout1 from './components/Pagelayout1';
import Login from './components/Login';
import Pagelayout2 from './components/Pagelayout2';
import Checkout from './components/Checkout';
import Congrats from './components/Congrats'



function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Pagelayout1>
          <Login/>
        </Pagelayout1>} />
        <Route path="/login" element={<Pagelayout2/>} />
        <Route path="/checkout" element= {<Checkout/>} />
        <Route path="/congrats" element = {<Congrats/>} />
      </Routes>
    </Router>
  );
}

export default App;
