import React from 'react';
import './User.css';
import UserContainer from './containers/UserContainer';


function UserPage({userID, setUserID}) {
    return (
        <div className="userPage">
            <h1>Yo</h1>
                <UserContainer userID={userID} setUserID={setUserID}/>
        </div>
    )
}

export default UserPage
