import React from 'react';
import './User.css';
import UserContainer from './containers/UserContainer';


function UserPage({userID, setUserID, getData}) {

    return (
        <div className="userPage">
            {console.log(getData())}
            <h1>Yo</h1>
                <UserContainer userID={userID} setUserID={setUserID} getData={getData}/>
        </div>
    )
    
}

export default UserPage
