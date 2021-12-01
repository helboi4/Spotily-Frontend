import React from 'react'

function SearchBar({searchForSong}) {
    return (
        <div className="search">
            <input  onChange={searchForSong} type="search" placeholder="Search songs"></input>
        </div>
    )
}

export default SearchBar
