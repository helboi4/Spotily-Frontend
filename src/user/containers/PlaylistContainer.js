import React from 'react';
import {useState, useEffect} from 'react';
// import Playlist from './playlist/Playlist';


function PlaylistContainer(userID = 5) {

    const [playlists, setPlaylists] = useState([]);
    const [currentPlaylistSongs, setCurrentPlaylistSongs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/playlist", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(data => setPlaylists(data.filter((p) => p.id === userID)))
        .then(fetch(`http://localhost:8080/playlist/${playlists[0].id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json()))
        .then(data => setCurrentPlaylistSongs(data))
        
        .then(console.log(playlists))
        .then(console.log(currentPlaylistSongs));
    })

    // useEffect(() => { 
    //     fetch("http://localhost:8080/playlist", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //             },
    //         })
    //     .then(response => response.json())
    //     .then(data => {
    //         const playlistIDs = 
    //     })
    // }

    //display playlist at playlists[0]




    return (


        <div>
           Hello 
        </div>
    )
}

export default PlaylistContainer

