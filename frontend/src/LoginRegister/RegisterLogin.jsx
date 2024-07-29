import React, { useState } from 'react';
import './LoginRegister.css';
import { FaMobileScreen } from "react-icons/fa6";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// import axios from 'axios';
export const RegisterLogin = () => {
    const [name, setName] = useState("");
    const [nameerr, setNameErr] = useState(false);
    const [email, setMail] = useState("");
    const [emailerr, setEmailErr] = useState(false);
    const [mobile, setMobile] = useState("");
    const [mobileerr, setMobileErr] = useState(false);
    const [password, setPwd] = useState("");
    const [Pwderr, setPwdErr] = useState(false);

    const test = async (event) => {
        event.preventDefault();
     
        let data = {name,email,mobile,password}
        console.log(data);
    
        let result = await fetch("http://localhost:7000/user/register", {
          method:"POST",    
          headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json",
          },
          body:JSON.stringify(data)
        })
    
        result =await (result).json();
        alert('Registration successful');
      }
    
    
    

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
    const MobileHandler = (event) => {
        let val = event.target.value;

        if (val.length != 10) {
            setMobileErr(true);
        }
        else {
            setMobileErr(false);
            setMobile(val);
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
        <div className="form-box register">
            <form action='' onSubmit={test}>
                <h1>Registration</h1>
                <div className="input-box">
                        <input type='text' placeholder='Username' required onChange={nameHandler} />
                        <FaUser className='icon' />
                        {
                            nameerr ? <p>*Name should contain at least 2 letters</p> : null
                        }
                    </div>
                <div className="input-box">
                    <input type='email' placeholder='Email' required onChange={emailHandler} />
                    <FaEnvelope className='icon' />
                    {
                        emailerr ? <p>*Email should have at least 11 chracters</p> : null
                    }
                </div>
                <div className="input-box">
                    <input type='number' placeholder='Mobile Number' required onChange={MobileHandler} />
                    <FaMobileScreen className='icon' />
                    {
                        mobileerr ? <p>*Number should have 10 digits</p> : null
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
                    <label><input type='checkbox' placeholder='Username' required /> I agree to terms & conditions </label>

                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href='/login'>Login</a></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegisterLogin;