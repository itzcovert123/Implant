import React, { useState } from 'react';
import './LoginRegister.css';
import './Navbar';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUser, FaEnvelope } from "react-icons/fa";
export const RegisterLogin = () => {
    const [email, setMail] = useState(null);
    const [emailerr, setEmailErr] = useState(false);
  

    const emailHandler = (event) => {
        let val = event.target.value;

        if (val.length < 11) {
            setEmailErr(true);
        }
        else {
            setEmailErr(false);
            setMail(val);
        }
    }
    

    return (
        <>
          
        
        <div className='wrapper'>
        <div className="form-box register">
            <form action=''>
                <h1>Get Password</h1>
                <div className="input-box">
                    <input type='email' placeholder='Email' required onChange={emailHandler} />
                    <FaEnvelope className='icon' />
                    {
                        emailerr ? <p>*Email should have at least 11 chracters</p> : null
                    }
                </div>
                <div className="remember-forgot">
                        
                        <a href='/PassReset'> Reset Password </a>

                    </div>
               
                <button type='submit'>Get Password</button>
                
            </form>
        </div>
        </div>
        
        
        </>
        
    )
}

export default RegisterLogin;