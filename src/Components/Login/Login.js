
import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context'
import {useNavigate,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate=useNavigate()
  const {firebase} =useContext(FirebaseContext)
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
       firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        navigate('/')
       }).catch((error)=>{
        alert(error.message)
       })
      }

  
  return (
    <div>
      <div className="loginParentDiv">
        <img className='img' width="200px" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{navigate('/signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
