import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Menubar({cartItems , openCart }) {

  return (
    <>
    <div className='bg-blue-400 shadow-lg'>
      <div className='container flex justify-between items-center py-4 sm:py-3'>
        {/**Logo */}
        <div className='font-bold text-3xl text-white'>LPA</div>

        {/**Search Bar */}
        <div className=''>
          <li className='flex items-center'>
           <input className='mt-1 p-2 w-full border rounded-l-md'
                    placeholder='Search Here'/>
              <button className='mt-1 p-3 bg-white text-gray-700 border 
                                 border-l-0 rounded-r-md flex items-center justify-center
                                 text-md'
                      type='submit'>
                <FaSearch/>
              </button>
              <div className='ml-4'>
                <button className='flex justify-center items-center
                gap-2 bg-secondary text-xl h-[40px]
                text-white px-5 py-2 hover:scale-105
                transition duration-300 ease-in-out rounded-md'
                onClick={openCart}>
                  <FaShoppingCart/>
                  <h1>{cartItems.length}</h1>
                  </button>
              </div>
          </li>
        </div>
      </div>
    </div>
    </>
  )
}

export default Menubar;
