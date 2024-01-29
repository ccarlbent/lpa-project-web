import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Darkmode from './Darkmode';

const LinkMenu = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'About',
    link: '/about'
  },
  {
    id: 1,
    name: 'Contacts',
    link: '/contacts'
  },
  {
    id: 1,
    name: 'Blogs',
    link: '/blogs'
  }
  
]

function Navbar() {
  return (
    <div>
      <div className='py-4'>
        <div className="container">
          {/*Logo and Links */}
          <div className='flex-item'>
            <a href='#'>LPA</a>
          </div>
          {/*Menu Items */}
          <div className='hidden-item'>
            <ul className='flex-items'>
              {
                LinkMenu.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='inline-block-item'>{data.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/*Navbar */}
          <div>
            {/*Search Bar Section */}
              <div>
                <input 
                className='search-bar' 
                type='text' 
                placeholder='Search Here' />
                <FaSearch className='search-icon' />
              </div>
              {/*Cart Button Section */}
              <button className='relative-btn'>
                <FaCartPlus className='add-to-cart'/>
                <div className=''>0</div>
              </button>
            {/*Dark Mode Section */}
              <div>
                <Darkmode/>
              </div>
              {/*Register */}
              <div>
                <button className='signup-btn'>Register</button>
              </div>
               {/*Login */}
               <div>
                <button className='login-btn'>Login</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
