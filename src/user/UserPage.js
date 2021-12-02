import React from 'react';
import './User.css';
import UserContainer from './containers/UserContainer';


function UserPage({userID, setUserID, getData}) {

    return (
        <div className="userPage">
                <UserContainer userID={userID} setUserID={setUserID} getData={getData}/>
        </div>
    )
    
}

export default UserPage
