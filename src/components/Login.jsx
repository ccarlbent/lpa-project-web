import React, { useState } from 'react'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const handleLogin = (e) => {
      e.preventDefault();
  };
  return (
    <div>
      <form className='form-login mt-5' onSubmit={handleLogin}>
        <input 
        type='text' 
        placeholder='Username' 
        value={userName} 
        onChange={ (e) => setUserName(e.target.value)}/>
        <input
        type='password'
        placeholder='Password'
        value={passWord}
        onChange={ (e) => setPassWord(e.target.value)}/>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

 


export default Login;
