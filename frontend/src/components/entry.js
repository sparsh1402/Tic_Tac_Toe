import React, { useEffect } from 'react'
import "./entry.css";
import { Link } from 'react-router-dom';

export default function entry() {
    return (
        
        <div className="entryPage">
                <p className='async'>
                    async
                </p>
                <p className='tic'>
                tic tac toe
            </p>
            
            <div className='login-btn'>
                <Link to="/signin">
                  <li>Login</li>
              </Link>
            </div>

            <div className='registe-btn'>
                <Link to="/signup">
                  <li>Register</li>
                </Link>
            </div>
            
                
        </div>
        
    );
}
