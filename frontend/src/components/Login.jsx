import React, { useState } from 'react';


const Login = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  
  const handleLogin = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form className='form-login mt-5' onSubmit={handleLogin}>
      <h3>Log In</h3>
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
