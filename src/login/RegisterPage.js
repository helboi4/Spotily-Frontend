import React, {useState, useEffect} from 'react'
import { useRef } from "react";
import './Register.css'
import {useNavigate} from 'react-router-dom'
import Snackbar from "./components/snackbar/Snackbar";

const SnackbarType = {
    success: "success",
    fail: "fail",
  };


function Register()
{
    const snackbarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info')){
        navigate("/registerpage")
         };
       }, [navigate]);
    const [username, setUserName] =useState ("")
    const [email, setEmail] = useState("")
   

   
   
   // const [password, setPassword] = useState("")

    function logout(){
        localStorage.clear();
        navigate('/')
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
    navigate("/userpage", {replace: true});
   
}      
    return(
        <div className="register-page">
            <img className="spotily" src="/logo.png" alt="spotily logo" />
<div className="main-container">
<h1>Create Account</h1>

<div className = "input-container">
<input type= "text" value={username} onChange ={(e)=>setUserName(e.target.value)} className="form-control" placeholder="Please enter a username"/>
<br /> 
<input type= "text" value={email} onChange ={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Please enter an email"/> 
<br /> 
</div>
<div className = "button-container"> 
<button className = "register-button"   onClick={() => {
          signUp(); snackbarRef.current.show();
        }}>Register</button>

    <Snackbar
        ref={snackbarRef}
        message="Registration Successful!"
        type={SnackbarType.success}
      />

 <button onClick={logout} className="login-button">back to login</button>
 

<br /> 


        </div>
        </div>
        </div>
        
    )
   

    }
    export default Register