import './App.css';
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { BrowserRouter ,Router, Route,Routes, Switch, Redirect, Navigate } from 'react-router-dom';
import First from './LoginRegister/First'
import LoginRegister from './LoginRegister/LoginRegister'
import RegisterLogin from './LoginRegister/RegisterLogin'
import ForgetPass from './LoginRegister/ForgetPass'
import PassRest, { PassReset } from './LoginRegister/PassReset'
import Navbar from './LoginRegister/Navbar'



function Test() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuth(true);
    }
  }, []);
  return (
    <>
    <BrowserRouter>
    <div>

      {/* <LoginRegister/> */}
      
      
      <Navbar/>
        <Routes>
        
          {/* <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} /> */}
    
          <Route exact path="/" Component={First} />
          <Route exact path="/login" Component={LoginRegister} />
          <Route path="/Register" Component={RegisterLogin} />
          <Route path="/Forget" Component={ForgetPass} />
          <Route path="/PassReset" Component={PassReset} />
          <Route path="/*" Component={Error}/>
          </Routes >

          
        </div>
        </BrowserRouter >
        </>
        );
}

        export default Test;
