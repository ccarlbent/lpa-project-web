import React from 'react';
import { Link } from 'react-router-dom';


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
        <div className="btn-group ms-3" role="group" aria-label="login-signup">
            <Link to="/signup">
                <button type="button" className="btn btn-primary">Sign Up</button>
            </Link>
            <Link to="/login">
                <button type="button" className="btn btn-danger">Log In</button>
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
