

import { Route } from "react-router-dom";
import Login from "./Login/Login.js";
import Register from "./Register";
import Home from "./Home"

function App() {

  return (
      
  <div className="Navbar">
      
        <Route exact path ="/login" component= {Login}/> 
        
        <Route exact path="/register" component ={Register}/> 

        <Route exact path="/home" component ={Home}/> 
        
        
       

   
 </div>


      
   
  );
}

export default App;