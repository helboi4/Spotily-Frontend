import './Login.css';


import {FaUserCircle} from "react-icons/fa";
import {IconContext} from "react-icons"
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

function Login() {
const [id,setID] = useState("")
const [email,setEmail] = useState("")

const history = useHistory();



async function login()
{
  console.warn(id,email)
  let item = {id,email}; 
  let result = await fetch("http://localhost:8080/api/user/allUsers", {
    method: 'POST',
    headers: { 
      "Content-Type": "application/json",
      "Accept" : 'application/json'

    }, 
    body: JSON.stringify(item)
  });
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/home")
}

  return (

<div className="main">

<div className="sub-main">
<div className="imgs">
  <div>
  <img src="dj.jpg" alt="email" />
  </div>
  <div className="ProfilePicIcon">
    <IconContext.Provider value ={{style:{fontSize:'125px', color: "#040123", position:'absolute', left:'630px', top:'100px'}}}>
     
 <div>
<FaUserCircle/>

  </div>
</IconContext.Provider>

</div>
<div>
  <h1 className="loginPage">Login Page</h1>
  <div>

    
    <input type="number" placeholder="Please enter your ID" onChange={(e)=>setID(e.target.value)} className="form-control"/>
  
  </div>
  <div className="second-input">
    
    <input type="email" placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
  </div>
 <div className="login-button">
 <button onClick={login} className="login-button" >Login</button>
 </div>
 // eslint-disable-next-line
   <p className="link">
     <a href="#">Forgot password?</a> 
     <div>
       <a href="./Register">Register</a>
       </div>
   </p>
  

</div>
</div>


</div>
</div>

);
} 



export default Login;
