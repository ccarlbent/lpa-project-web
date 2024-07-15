import React, { useState } from 'react';
import { FaAngleDown, FaUser } from "react-icons/fa";
import Signup from './Signup';


const menuBar1 = [
  { id: 1, name: 'Home', link:'/#' },
  { id: 2, name: 'About', link: '/#'},
  { id: 3, name: 'Contact', link: '/#'},
  { id: 4, name: 'Blog', link: '/#'}
];

const categories = [
  { id: 1, name: 'Nike', link: '/#'},
  { id: 2, name: 'Adidas', link: '/#'},
  { id: 3, name: 'Reebok', link: '/#'},
  { id: 4, name: 'Tommy Hollinger', link: '/#'},
  { id: 5, name: 'Puma', link: '/#'},
];

function Navbar() {
  const [ showSignup , setShowSignup ] = useState(false);
  const handleClose = () => {
    setShowSignup(false);
  };
  return (
    
    <>
    <div className='bg-white shadow-lg'>
        <div className='container flex justify-between items-center py-4 sm:py-3'>

          {/** LOGO*/}
          <div className='font-bold text-3xl'>LPA</div>

          {/** Menubar */}
          <div>
            <ul className='flex items-center gap-10'>
              {menuBar1.map(({ id, name, link }) => (
                <li key={id}>
                  <a 
                  href={link}
                  className='inline-block 
                  hover:text-primaryDark text-xl
                  font-semibold'>
                     {name} </a>
                </li>
              ))}

              {/** Dropdown*/}

              <li className='cursor-pointer group'>
                <a
                href='/#'
                className='inline-block
                hover:text-primaryDark text-xl
                font-semibold'>
                  <div className='flex items-center gap-[2px] py-2'>
                    Catergory
                      <span>
                        <FaAngleDown 
                        className='group-hover:rotate-180 duration-300'
                        />
                     </span>
                  </div>
                </a>
                <div>
                  <ul className='absolute z-[9999] 
                  hidden group-hover:block
                  w-[200px] bg-white text-black shadow-md p-2'>
                    { categories.map(({ id, name, link}) => (
                      <li key={id}>
                        <a href={link} 
                        className='text-sm
                        inline-block w-full
                        rounded-md p-2 hover:text-secondary/55'> {name} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/**Login Button */}
              <li>
                <button 
                className='flex justify-center items-center
                gap-2 bg-secondary text-xl h-[40px]
                text-white px-5 py-2 hover:scale-105
                transition duration-300 ease-in-out rounded-md'
                onClick={() => {setShowSignup(true)}}>
                  <FaUser />
                  Create Account
                </button>
              </li>
            </ul>
          </div>
        </div>
    </div>
    {showSignup && <Signup onClose = {handleClose}/>}
    </>
  )
}

export default Navbar;
