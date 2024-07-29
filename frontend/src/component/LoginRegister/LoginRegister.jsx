import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
export const LoginRegister = () => {
    const [action, setAction] = useState('');
    const registerLink = () => {
        setAction(' active');
    };
    return (
        <div className='wrapper'>
            <div className="form-box login">
                <form action=''>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type='checkbox' placeholder='Username' required /> I agree to terms & conditions </label>

                    </div>
                    <button type='submit'>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister;