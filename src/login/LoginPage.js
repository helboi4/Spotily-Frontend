import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Login.css'

function LoginPage({userID, setUserID, setData}) {
const [id,setID] = useState("")
const [email,setEmail] = useState("")
// const [admin, setAdmin]
const navigate = useNavigate();



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
//   localStorage.setItem("user-info",JSON.stringify(result))
if(userInfo.length !== 0) {
    setData(id);
    setUserID(id);
    navigate("/userpage");
}
// if (userInfo.admin === true ){
//   history.push("/admin")
// }

}
  return (




<MainContainer>
  <WelcomeText>Login</WelcomeText>

 

<InputContainer> 
    <input type="number" placeholder="Please enter your ID" onChange={(e)=>setID(parseInt(e.target.value))} className="form-control"/>
   <input type="email" placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
</InputContainer>

 <ButtonContainer>
 <button onClick={login} className="login-button" >Login</button>
</ButtonContainer>
 <div>
       <a href="./RegisterPage">Register</a>
       </div>
   
  
  </MainContainer>

);
} 
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText= styled.h2`
  margin: 3rem 0 2rem 0;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default LoginPage;