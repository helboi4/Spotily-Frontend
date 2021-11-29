import React from 'react';
import {useState, useEffect} from 'react';
import Playlist from '../components/playlist/Playlist';


function PlaylistContainer(userID = 5) {

    const [playlists, setPlaylists] = useState([]);
    const [playlistIds, setPlaylistIds] = useState([])
    const [currentPlaylistSongs, setCurrentPlaylistSongs] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/playlist", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => setPlaylists(data.filter((p) => p.id === userID)))
    //     .then(fetch(`http://localhost:8080/playlist/${playlists[0].id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(response => response.json()))
    //     .then(data => setCurrentPlaylistSongs(data))
        
    //     .then(console.log(playlists))
    //     .then(console.log(currentPlaylistSongs));
    // })

    useEffect(() => { 
        fetch("http://localhost:8080/playlist", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
            })
        .then(response => response.json())
        .then(data => {
            setPlaylists(data);
            let idArray = [];
            let idObject = {};
            data.forEach(song => (idObject[song.playlist] = 1))
            idArray = Object.keys(idObject)
            .map(key => (parseInt(key)));
            console.log(idArray)
            setPlaylistIds(idArray)
        })

    }, []);

    //display playlist at playlists[0]
    const selectCurrentPlaylist = (playlists, playlistIds, playlistSelector) => {
        

    }




    return (

        <div>
            <>
                {playlists.length > 0 ?
                    <Playlist playlists = {playlists} playlistIds = {playlistIds}/>
                :
                <p>Loading...</p>}
            </>
        </div>
    );
}

export default PlaylistContainer

