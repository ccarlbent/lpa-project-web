import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Checkout() {
  
  const navigate = useNavigate();

  const [ name , setName] = useState('');
  const [ email , setEmail] = useState('');
  const [ bankNumber , setBankNumber ] = useState('');
  const [ expireDate , setExpireDate ] = useState('');
  const [cvc , setCvc ] = useState('');

  const handlePayNow = (e) => {
    e.preventDefault();

    if (!name || !email || !bankNumber || !expireDate || !cvc ) {
      alert('Please fill all the fields');
      return;
    };

    navigate('/congrats');
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center h-full'>
      <div className='bg-blue-400 p-6 rounded shadow-lg w-96'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Checkout Your Item</h2>
          <form onSubmit={ handlePayNow }>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Name</label>
              <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'/>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>Email Address</label>
              <input 
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'/>
            </div>
            <div className='mb-4'>
              <label
              htmlFor='card' 
              className='block text-sm font-medium text-gray-700'>Card Details</label>
              <input
              id='bankNumber'
              type='text'
              value={ bankNumber }
              onChange={ (e) => setBankNumber(e.target.value)}
              placeholder='1234 5678 8901'
              required
              maxLength={19}
              pattern='\d{4} \d{4} \d{4} \d{4}'
              title='Please enter valid number'
              />
            </div>

            {/** Expiry Date*/}
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Expiry Date (MM/YY)
              </label>
              <input
              id='expireDate'
              type='text'
              value={expireDate}
              onChange={ (e) => setExpireDate(e.target.value)}
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'
              placeholder='MM/YY'
              required
              maxLength={5}
              pattern='(0[1-9]|1[0-2])\/\d{2}'
              title='Please enter valid expiry date (MM/YY)'/>
            </div>

            {/**CVC */}
            <div className='mb-4'>
              <label
              className='block text-sm font-medium text-gray-700'>CVC
              </label>
              <input
              className='mt-1 block w-full border
               border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
                focus:border-indigo-500 sm:text-sm'
                id='cvc'
                value={cvc}
                type='text'
                onChange={(e) => setCvc(e.target.value)}
                placeholder='123'
                required
                maxLength={3}
                pattern='\d{3}'
                title='Please enter valid CVC'/>
            </div>
            <div className='mb-4'>
              <button 
              type='submit'
              className='mt-4 py-2 px-4 bg-blue-500 text-white rounded-md
               hover:bg-blue-600'>Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Checkout;
