import React, {useState, useEffect} from 'react'
import { useRef } from "react";
import './Register.css'
import {useHistory} from 'react-router-dom'
import Snackbar from "./snackbar/Snackbar";

const SnackbarType = {
    success: "success",
    fail: "fail",
  };


function Register()
{
    const snackbarRef = useRef(null);


    useEffect(() => {
        if(localStorage.getItem('user-info')){
        history.push("/register")
         };
       }, []);
    const [username, setUserName] =useState ("")
    const [email, setEmail] = useState("")
   

   
   
   // const [password, setPassword] = useState("")
    const history =useHistory();

    function logout(){
        localStorage.clear();
        history.push('/login')
    }
    async function signUp() {
        let parameters = {username, email}
        console.warn(parameters)

        let results = await fetch("http://localhost:8080/api/user/register",{
            method: 'POST',
            body:JSON.stringify(parameters),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
        }
    })

    results = await results.json()
    localStorage.setItem("user-info", JSON.stringify(results))
    history.push("/home")
   
}      
    return(
    
<div className="main-container">
<h1>Create Account</h1>
<div className = "input-container">  
<input type= "text" value={username} onChange ={(e)=>setUserName(e.target.value)} className="form-control" placeholder="Please enter a username"/>
<br /> 
<input type= "text" value={email} onChange ={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Please enter an email"/> 
<br /> 
</div>

<button className = "register-button"   onClick={() => {
          signUp(); snackbarRef.current.show();
        }}>Register</button>
    
    <Snackbar
        ref={snackbarRef}
        message="Registration Successful!"
        type={SnackbarType.success}
      />
<div className = "button-container"> 
 <button onClick={logout} className="login-button">back to login</button>
 </div>

<br /> 

    
        </div>

        
    )
   

    }
    export default Register