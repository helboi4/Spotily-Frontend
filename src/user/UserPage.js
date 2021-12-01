import React from 'react';
import PlaylistContainer from './containers/PlaylistContainer';
import './User.css';
import QuizContainer from './containers/QuizContainer';
import UserContainer from './containers/UserContainer';


function UserPage({userID}) {
    return (
        <div className="user-page">
            <h1>Yo</h1>
                {/* <QuizContainer/>
                <PlaylistContainer/>  */}
                <UserContainer userID={userID}/>
        </div>
    )
}

export default UserPage
