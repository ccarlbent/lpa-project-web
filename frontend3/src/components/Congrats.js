import React from 'react';
import { useNavigate } from 'react-router-dom';

function Congrats() {

  const navigate = useNavigate();

  const BackHome = () => {
    navigate('/login');
  }

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-red-700'>
      <div className='bg-red-400 p-8 rounded shadow-lg w-96 text-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>
            Invoice
          </h1>
          <p className='text-lg'>Thank you for your purchase!</p>
          
          <div className='mt-4'>
            <h2 className='text-xl font-semibold'>Invoice Details:</h2>
            <p className='text-sm'>Invoice #: 123456</p>
            <p className='text-sm'>Date: {new Date().toLocaleDateString()}</p>
            <p className='text-sm'>Total: $99.99</p>
          </div>

          <button
            className='mt-5 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            onClick={BackHome}>
            Buy Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Congrats;
