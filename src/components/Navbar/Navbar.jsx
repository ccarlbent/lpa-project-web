import React from 'react';
import { Link } from 'react-router-dom';
//import { FaSearch } from "react-icons/fa";
//import { FaCartPlus } from "react-icons/fa";
//import Darkmode from './Darkmode';


const LinkMenu = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'About',
    link: '/#abouts'
  },
  {
    id: 3,
    name: 'Contacts',
    link: '/#contacts'
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/blogs'
  }
  
]

function Navbar() {



  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className='navbar-brand' to='#'>LPA</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          {
            LinkMenu.map((navigation, index) => (
             <ul className=''>
                <li key={index}>
                   <Link to={navigation.link}>{navigation.name}</Link>
                </li>
              </ul>
            ))
          }
        </div>
        <form className='d-flex'>
          <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
          <button className='btn btn-outline-secondary' type='submit'>Search</button>
        </form>
       
      </div>
    </nav>
  )
}

export default Navbar;
