import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [name,setName] = useState("");
    const navigate = useNavigate()

    const handleInput = (e)=>{
        setName(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate('/todo');
    }   

  return (
    <div className='login-container'>
        <div className="login-div">
            <h2>Login</h2>
            <form className="input" onSubmit={handleSubmit}>
                <p>Enter your Name</p>
                <input type="text" placeholder='Name' required value={name} onChange={handleInput}/>
                <button type='submit'>Get Started</button>
            </form>
        </div>
    </div>
  )
}
