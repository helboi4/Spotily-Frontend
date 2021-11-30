import React from 'react'

function FastForwardButton({handleClick}) {
    return (
        <div>
            <button type = "button" onClick = {handleClick}>
                <img src="../../../images/next-button" alt="next button"/>
            </button>
        </div>
    )
}

export default FastForwardButton
