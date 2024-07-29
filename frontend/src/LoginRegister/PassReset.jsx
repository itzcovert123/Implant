import React, { useState } from 'react';
import './Navbar';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
export const PassReset = () => {
    const [name, setName] = useState(null);
    const [nameerr, setNameErr] = useState(false);
    const [email, setMail] = useState(null);
    const [emailerr, setEmailErr] = useState(false);
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
                <form action='' onSubmit={showInfo}>
                    <h1>New Password</h1>
                    <div className="input-box">
                    <input required type='password' placeholder='New Password' onChange={passwordHandler} />
                        <FaLock className='icon' />
                        {
                            Pwderr ? <p>*Use longer password</p> : null
                        }
                    </div>
                    <div className="input-box">
                        <input required type='password' placeholder='Confirm Password' onChange={passwordHandler} />
                        <FaLock className='icon' />
                        {
                            Pwderr ? <p>*Use longer password</p> : null
                        }
                    </div>


                    <button type='submit'>Set Password</button>
                </form>
            </div>
        </div>
    )
}

export default PassReset;