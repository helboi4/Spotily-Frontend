import './App.css';
import UserPage from "./user/UserPage";
import LoginPage from "./login/LoginPage";
import AdminPage from "./admin/AdminPage";
import RegisterPage from "./login/RegisterPage";
import { useState , useEffect} from 'react';
import {Routes, Route, Link, Navigate} from "react-router-dom";

function App() {

  const[userID, setUserID] = useState(2);

  useEffect(() => {localStorage.setItem('id', JSON.stringify(userID))},[userID]);


  function setData(data) {
    localStorage.setItem('id', JSON.stringify(data));
  }

  function getData() {
    return JSON.parse(localStorage.getItem('id'));
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage userID={userID} setUserID = {setUserID} setData= {setData}/>}/>
        <Route path="/registerpage" element={<RegisterPage />}/>
        <Route path="/userpage" element={userID == null ? <Navigate replace to="/"/> :<UserPage userID={userID} setUserID = {setUserID} getData={getData}/>}/>
        <Route path="/adminpage" element={userID == null ? <Navigate replace to="/"/> : <AdminPage userID={userID}/>}/>
      </Routes>
    </div>
  );
}

export default App;
