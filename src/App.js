import './App.css';
import UserPage from "./user/UserPage";
import LoginPage from "./login/LoginPage";
import AdminPage from "./admin/AdminPage";
import { useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";

function App() {

  const[userID, setUserID] = useState(2)


  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LoginPage/>}/> */}
        <Route path="/userpage" element={<UserPage userID={userID} setUserID = {setUserID}/>}/>
        <Route path="/adminpage" element={<AdminPage userID={userID}/>}/>
      </Routes>
    </div>
  );
}

export default App;
