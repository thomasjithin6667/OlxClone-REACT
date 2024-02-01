import React, { useState ,useContext} from 'react';
import { useNavigate,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const  [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[password,setPassword]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(firebase);
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          Username:username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      })
    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
      <img className='img' width="200px" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue=""
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue=""
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        
        <a onClick={()=>{
          navigate('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
