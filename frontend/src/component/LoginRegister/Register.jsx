import React ,{useState} from 'react';
import './LoginRegister.css';
import { FaUser,FaLock ,FaEnvelope } from "react-icons/fa";
export const LoginRegister = () => {
    const [action , setAction]=useState('');
    const registerLink= () => {
        setAction(' active');
    };
  return (
    <div className="form-box register">
    <form action=''>
        <h1>Registration</h1>
        <div className="input-box">
            <input type='email' placeholder='Email' required/>
            <FaEnvelope  className='icon'/>
        </div>
        <div className="input-box">
            <input type='password' placeholder='Password' required/>
            <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
           <label><input type='checkbox' placeholder='Username' required/> I agree to terms & conditions </label>
          
        </div>
        <button type='submit'>Register</button>
        <div className="register-link">
            <p>Already have an account? <a href='#'>Login</a></p>
        </div>
    </form>
 </div>
)
}

export default Register;