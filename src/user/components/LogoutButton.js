import React from 'react';
import {Link} from 'react-router-dom';

function LogoutButton({setUserID}) {
    return (
        <div>
            <Link to ="/adminpage" onClick={() => {setUserID(null)}}>LogOut</Link>
        </div>
    )
}

export default LogoutButton
