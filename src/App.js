import './App.css';
import UserPage from "./user/UserPage";
import LoginPage from "./LoginUI/LoginPage";
import AdminPage from "./admin/AdminPage";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/userpage" component={UserPage}/>
        <Route exact path="/adminpage" component={AdminPage}/>
      </Routes>
    </div>
  );
}

export default App;
