import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import Notification from './Notification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from "react-toastify";

import './register.css';
export default function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email ,setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Toast functions
  const notifyA = () => toast.error('WOW')

  const postData = () => {
    //sending data to server
    console.log({
      name,
      userName,
      email,
      password
    });
    fetch("http://localhost:5000/signup", {
      method: "post",
      
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password:password
      })

    }).then(res => res.json())
      .then(data => {
        notifyA()
        console.log(data)
      })
  }
  return (
      <div className="signUp">
          <p className='create'>Create account</p>
          <p className='lets'>Let's get to know you better!</p>
          <div className="form-container">
              <div className="form">
            <p className='name'>Your name</p>
              <div >
            <input type="text" className='nameBox' name="name" id="name" value={name} placeholder="Type your name here" onChange={(e) => { setName(e.target.value) }} />
                </div>
            <p className='userName'>Username</p>
                <div>
                  <input type="text" className = 'userNameBox' name="username"  id="username" value = {userName}  placeholder="Type your username here" onChange={(e) => {setUserName(e.target.value)}} />
                </div>
            <p className='Email'>Email</p>
                <div>
                  <input type="email" className='emailBox' name="email" id="email" value = {email} placeholder="Email" onChange = {(e)=>{setEmail(e.target.value)}} />
                  </div>
            <p className='Password'>Password</p>
              <div>
                   <input type="password" className = "passwordBox" name="password" id="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
          
            <Notification/>
            
              
          <input type="submit" id="submit-btn" value="Register" onClick={() => {postData()} } />
              </div>
             
          </div>
    </div>
  )
}
