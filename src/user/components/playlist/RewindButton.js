import React from 'react'

function RewindButton({handleClick}) {
    return (
        <div className="rewind">
            <button className="button" type = "button" onClick={handleClick}>
            <svg className = "arrow-button" xmlns="http://www.w3.org/2000/svg" width= "48" height = "48" viewBox="0 0 24 24"><path d="M13.41,12l3.3-3.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0,0,1.42l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM8,7A1,1,0,0,0,7,8v8a1,1,0,0,0,2,0V8A1,1,0,0,0,8,7Z"/></svg>
            </button>
        </div>
    )
}

export default RewindButton
