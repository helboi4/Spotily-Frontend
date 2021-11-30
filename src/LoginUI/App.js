

import { Switch, Route } from "react-router-dom";
import LoginUi from "./LoginUi/LoginUi";
import Register from "./Register";

function App() {

  return (
      
  <div className="header">
      <Switch>
        <Route path ="/login"> 
        <LoginUi /> 
        </Route>
        <Route path="/register">
        <Register />
        </Route>
        
      </Switch>
    </div>


      
   
  );
}

export default App;