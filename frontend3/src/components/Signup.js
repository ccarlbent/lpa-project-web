import React, { useState } from 'react';
import axios from 'axios';

function Signup({onClose}) {

  const [ user, setUser ] = useState('');
  const [ email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSignupForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/signup', {
        username : user,
        email ,
        password,
      }); 
      console.log('user registered:', response.data);
      onClose();
    } catch (error) {
      console.log('error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg w-96'>
        <div className='flex justify-end'>
          <button 
            onClick={onClose}
            className='text-gray-600 hover:text-gray-900'>
              &times;
          </button>
        </div>
        <h1 className='text-xl font-semibold mb-4'> Register Here </h1>
        <form onSubmit={handleSignupForm}>
          <div className='mb-4'>
            <label className='block text-sm font-md text-gray-700'>Username</label>
            <input 
            className='mt-1 p-2 w-full border rounded-md'
            value={user}
            onChange={(e) => setUser(e.target.user)}
            required/>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-md text-gray-700'>Email</label>
            <input
            className='mt-1 p-2 w-full border rounded-md'
            value={email}
            id='email'
            onChange={(e) => setEmail(e.target.email)}
            required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-md text-gray-700'>Password</label>
            <input
            className='mt-1 p-2 w-full border rounded-md'
            value={password}
            onChange={(e) => setPassword(e.target.password)}
            id='password'
            required
            />
          </div>
          <button 
          className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
