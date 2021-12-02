import React from 'react'

function SearchBar({searchForSong}) {
    return (
            <input className="search-bar" onChange={searchForSong} type="search" placeholder="Search songs"></input>
    )
}

export default SearchBar
