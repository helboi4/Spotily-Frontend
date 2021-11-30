import './LoginUi.css';
import profile from "./../image/profilePic.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import {FaUserCircle} from "react-icons/fa";
import {IconContext} from "react-icons"
function LoginUi() {
  return (


// <body>
// <img  className="logoImage" src="dj.jpg" alt="Spotily logo"/>
// </body>


//   );

// }

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

    <img src={email} alt="email" className="email"/>
    <input type="text" placeholder="Username/Email" className="name"/>
  </div>
  <div className="second-input">
    <img src={pass} alt="pass" className="email"/>
    <input type="password" placeholder="Password" className="name"/>
  </div>
 <div className="login-button">
 <button>Login</button>
 </div>
  
   <p className="link">
     <a href="#">Forgot password?</a> 
     <div>
       <a href="#">Sign Up</a>
       </div>
   </p>
  

</div>
</div>


</div>
</div>

);
} 


export default LoginUi;
