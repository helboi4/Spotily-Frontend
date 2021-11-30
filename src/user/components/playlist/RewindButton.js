import React from 'react'

function RewindButton({handleClick}) {
    return (
        <div>
            <button type = "button" onClick={handleClick}>
                <img src="../../../images/back-arrow" alt ="backArrow"/>
            </button>
        </div>
    )
}

export default RewindButton
