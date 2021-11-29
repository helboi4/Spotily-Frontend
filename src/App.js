import './App.css';
import UserPage from "./user/UserPage";
import LoginPage from "./login/LoginPage";
import AdminPage from "./admin/AdminPage";
import {Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LoginPage}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path="/adminpage" element={<AdminPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
