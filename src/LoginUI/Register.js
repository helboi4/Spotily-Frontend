import React, {useState} from 'react'
import './Register.css'
import {useHistory} from 'react-router-dom'
function Register()
{
    const [username, setUserName] =useState ("")
    const [email, setEmail] = useState("")
   // const [password, setPassword] = useState("")
    const history =useHistory();

    async function signUp() {
        let parameters = {username, email}
        console.warn(parameters)

        let result = await fetch("http://localhost:8000/api/user/register",{
            method: 'POST',
            body:JSON.stringify(parameters),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
        }
    })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/add")
}      
    return(
        <div className="container">
<h1>Create Account</h1>
<input type= "text" value={username} onChange ={(e)=>setUserName(e.target.value)} className="form-control" placeholder="please enter a username"/>
<br /> 
<input type= "text" value={email} onChange ={(e)=>setEmail(e.target.value)} className="form-control" placeholder="please enter an email"/> 
<br /> 
{/* <input type= "password" value={password} onChange ={(e)=>setPassword(e.target.value)}className="form-control" placeholder="please enter a password"/>  */}
<br /> 
<button onClick ={signUp} className="register-button">Register</button>
        </div>
    )


    }
    export default Register