import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Pagelayout1 from './components/Pagelayout1';
import Login from './components/Login';
import Pagelayout2 from './components/Pagelayout2';
//import Products from './components/Products';
//import Checkout from './components/Checkout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagelayout1>
          <Login/>
        </Pagelayout1>} />
        <Route path="/login" element={<Pagelayout2/>} />
      </Routes>
    </Router>
  );
}

export default App;
