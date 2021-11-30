import React from 'react';

function FastForwardButton({handleClick}) {
    return (
        <div className="fastforward">
            <button type = "button" onClick = {handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width= "32" height = "32" viewBox="0 0 24 24"><path d="M8.71,7.29A1,1,0,1,0,7.29,8.71L10.59,12l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,0-1.42ZM16,7a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,16,7Z"/></svg>
            </button>
        </div>
    )
}

export default FastForwardButton
