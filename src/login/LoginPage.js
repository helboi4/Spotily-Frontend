import "../Login/Login.css"


import React, {useState, useEffect} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom'


function Login() {
const [id,setID] = useState("")
const [email,setEmail] = useState("")
// const [admin, setAdmin]
const history = useHistory();



async function login()
{
  console.warn(id,email)
  let item = {id,email}; 
  let results = await fetch("http://localhost:8080/api/user/allUsers", {
    method: 'GET',
    headers: { 
      "Content-Type": "application/json",
      "Accept" : 'application/json'

    }, 
  
  });
  results = await results.json();
  console.log(results)
console.log("here", id)


  const userInfo = results.filter(result => result.id === id && result.email === email)
  console.log(userInfo)
  // localStorage.setItem("user-info",JSON.stringify(result))
if(userInfo.length != 0) {
  history.push("/userpage")
}
// if (userInfo.admin === true ){
//   history.push("/admin")
// }

}
  return (



<div className="main-container">

  
  <h1>Login</h1>

 

<div className = "input-container">
    
    <input type="number" placeholder="Please enter your ID" onChange={(e)=>setID(parseInt(e.target.value))} className="form-control"/>
   <input type="email" placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
 </div>


<div className = "button-container"> 
 <button onClick={login} className="login-button">Login</button>
 </div>

<ul>
<a href="/registerpage">Register</a>
     </ul>

     
   

</div>
);
} 





export default Login;