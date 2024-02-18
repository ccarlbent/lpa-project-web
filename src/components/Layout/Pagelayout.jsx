import Navbar from '../Navbar/Navbar';
import Footer from '../Layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Signup from '../Signup';



function Pagelayout() {
  const location = useLocation();
  const homepage = location.pathname === '#';

  return (
    <div>
      <Navbar/>
      {homepage && <Signup/>}
        <div className='space-layout mt-50'>
        <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}

export default Pagelayout;
