import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const handleRegister = (e) => {
        console.log(e.target.value);
        
    }



  return (
    <div className='form-sigup mt-5'>
      <form onSubmit={handleRegister}>
        <h3>Sign Up</h3>
        <div>
            <input 
            type='text' 
            placeholder='Username' 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}/>
            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input
            type='password'
            placeholder='Password'
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}/>
            <button type='submit'>Register</button>
        </div>
        <div className='selet-signup-forgotpass'>
          <Link to="/login">
             <button type="button" className="btn btn-danger">Log In</button>
          </Link>
          <a href='#'>Forgot Password?</a>
        </div>
      </form>
    </div>
  )
}

export default Signup;
