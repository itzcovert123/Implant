import React, { useState } from 'react';
import axios from 'axios';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
export const LoginRegister = ({ setAuth } ) => {
    const [name, setName] = useState(null);
    const [nameerr, setNameErr] = useState(false);
    // const [email, setMail] = useState(null);
    // const [emailerr, setEmailErr] = useState(false);
    const [password, setPwd] = useState(null);
    const [Pwderr, setPwdErr] = useState(false);
    
    function showInfo(event) {
        event.preventDefault();
        let data = { name, password };
        console.log(data);
        if (nameerr || Pwderr) {
            alert("Valid information required");
        }
        else {
            alert("name : " + "\nPassword : " + password);
        }
    }

    
         const onSubmit = async (e) => {
          e.preventDefault();
      
          try {
            const res = await axios.post('http://localhost:7000/api/login', { name, password });
            localStorage.setItem('users', JSON.stringify(res.data.user));
            setAuth(true);
          } catch (err) {
            console.error(err.response.data);
          }
        }
    const nameHandler = (event) => {
        let val = event.target.value;

        if (val.length < 2) {
            setNameErr(true);
        }
        else {
            setNameErr(false);
            setName(val);
        }
    }

    const passwordHandler = (event) => {
        let val = event.target.value;

        if (val.length < 8) {
            setPwdErr(true);
        }
        else {
            setPwdErr(false);
            setPwd(val);
        }
    }
    
    
    

    
    return (
        <div className='wrapper'>
            <div className="form-box login">
                <form action='' onSubmit={ onSubmit }>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' placeholder='Username' required onChange={nameHandler} />
                        <FaUser className='icon' />
                        {
                            nameerr ? <p>*Name should contain at least 2 letters</p> : null
                        }
                    </div>
                    <div className="input-box">
                        <input required type='password' placeholder='Password' onChange={passwordHandler} />
                        <FaLock className='icon' />
                        {
                            Pwderr ? <p>*Use longer password</p> : null
                        }
                    </div>
                    <div className="remember-forgot">
                        <label><input type='checkbox' placeholder='Username' required /> Remember me</label>
                        {/* <a href='/Forget'>Forgot Password? </a> */}

                    </div>
                        <div className="Login">
                        <button type='submit'><a href='/home'>Login</a></button>
                        </div>
               
                    <div className="register-link">
                        <p>Don't have an account? <a href='/Register'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister;