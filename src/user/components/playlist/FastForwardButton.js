import React from 'react'

function FastForwardButton({fastForwardPlaylist}) {
    return (
        <div>
            <button onClick = {fastForwardPlaylist}>
                <img src="../../../images/next-button" alt="next button"/>
            </button>
        </div>
    )
}

export default FastForwardButton
