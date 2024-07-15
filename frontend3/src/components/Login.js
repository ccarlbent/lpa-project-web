import React from 'react';

function Login() {
  return (
    <div className='flex justify-center py-11'>
      <div className='bg-blue-300 bg-opacity-40 text-center
      p-6 rounded shadow-lg w-96'>
        <h1 className='text-xl font-semibold mb-4'> Login Form </h1>
        <form>
          <div className='mb-4'>
            <label className='block text-md font-sm text-gray-700'>Email</label>
            <input className='mt-1 p-2 w-full border rounded-md'
            required
            id='email'/>
          </div>
          <div className='mb-4'>
            <label className='block text-md font-sm text-gray-700'>Password</label>
            <input className='mt-1 p-2 w-full border rounded-md'
            id='password'
            required/>
          </div>
          <button
          className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          > Submit </button>
        </form>
      </div>
    </div>
  )
}

export default Login
