import React from 'react'

function RewindButton({rewindPlaylist}) {
    return (
        <div>
            <button onClick={rewindPlaylist}>
                <img src="../../../images/back-arrow" alt ="backArrow"/>
            </button>
        </div>
    )
}

export default RewindButton
