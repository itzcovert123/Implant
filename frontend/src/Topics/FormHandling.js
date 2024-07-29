import React from 'react'
import { useState } from 'react'

export default function FormHandling() {

    const [name, setName] = useState(null);
    const [nameerr, setNameErr] = useState(false);
    const [contact, setContact] = useState(null);
    const [contacterr, setContactErr] = useState(false);
    const [email, setMail] = useState(null);
    const [emailerr, setEmailErr] = useState(false);
    const [password, setPwd] = useState(null);
    const [Pwderr, setPwdErr] = useState(false);

    function showInfo(event) {
        event.preventDefault();
        let data = {name, contact, email, password};
        console.log(data);   
        if(nameerr || contacterr || emailerr || Pwderr)
        {
            alert("Valid information required");
        }
        else
        {
            alert("name : " + name + "\nContact : " + contact + "\nEmail : " + email + "\nPassword : " + password);
        }
    }

    const nameHandler = (event) => {
        let val = event.target.value;

        if(val.length < 5) {
            setNameErr(true);
        }
        else
        {
            setNameErr(false);
            setName(val);
        }
    }

    const contactHandler = (event) => {
        let val = event.target.value;

        if(val.length != 10) {
            setContactErr(true);
        }
        else
        {
            setContactErr(false);
            setContact(val);
        }
    }

    const emailHandler = (event) => {
        let val = event.target.value;

        if(val.length < 11) {
            setEmailErr(true);
        }
        else
        {
            setEmailErr(false);
            setMail(val);
        }
    }
    const passwordHandler = (event) => {
        let val = event.target.value;

        if(val.length < 8) {
            setPwdErr(true);
        }
        else
        {
            setPwdErr(false);
            setPwd(val);
        }
    }

  return (    
    <div className="formContainer">
        <form action="" onSubmit={showInfo}>
            <h1>Enquiry Form</h1>

            <div className="form-q">
                <h4>Enter Name</h4>
                <input required type="text" placeholder="enter name" onChange={nameHandler}/>
                {
                    nameerr ? <p>Name should contain at least 5 letters</p> : null
                }
            </div>

            <div className="form-q">
                <h4>Enter Contact no</h4>
                <input required type="number" placeholder="enter contact no" onChange={contactHandler}/>
                {
                    contacterr ? <p>Contact no should have 10 digits</p> : null
                }
            </div>

            <div className="form-q">
                <h4>Enter Email</h4>
                <input required type="email" placeholder="enter email" onChange={emailHandler}/>
                {
                    emailerr ? <p>Email should have at least 11 chracters</p> : null
                }
            </div>

            <div className="form-q">
                <h4>Enter Password</h4>
                <input required type="password" placeholder="enter password" onChange={passwordHandler}/>
                {
                    Pwderr ? <p>Use longer password</p> : null
                }
            </div>

            <div className="form-btn">
                <button type='submit'>Submit</button>
            </div>
        </form> 
    </div>
  )
}