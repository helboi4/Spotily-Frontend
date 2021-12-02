import React from 'react'
import {Link} from 'react-router-dom'
let user = JSON.parse(localStorage.getItem('user-info'))
console.warn(user)
function Navbar() {
return(
    <nav className ="navbar"> 
    <div className = "nav-container">

   
        
        
            <li>
            <NavLink exact to = "/home" className= "home" >
                Home
            </NavLink>
            </li>
          
       
              <li>
            <NavLink exact to = "/login" className= "login" >
                Login
            </NavLink>
            </li>
            <NavLink exact to = "/register" className= "login" >
                Register
        
            </NavLink>
         
        
        
</div>
</nav>
)

    }
export default Navbar