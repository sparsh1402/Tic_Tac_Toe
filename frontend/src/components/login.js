import React from 'react'
import "./login.css";
import { Link } from "react-router-dom";
export default function login() {
  return (
      <div className="signIn">
          <p className='create'>Login</p>
          <p className='lets'>Please enter your details</p>
          <div className="form-container">
              <div className="form">
            <p className='userNameL'>Username</p>
                <div>
                  <input type="text" className = 'userNameBoxL' name="username"  id="username" placeholder="Type your username here" />
                </div>
            <p className='PasswordL'>Password</p>
              <div>
                   <input type="password" className = "passwordBoxL" name="password" id="password" placeholder="Password" />
              </div>
                 
              
              <input type = "submit" id = "submit-btn" value = "Login"/>
              </div>
             
          </div>
    </div>
  )
}
