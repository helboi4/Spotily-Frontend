import React from 'react';
import {useState, useEffect} from 'react';
import Playlist from '../components/playlist/Playlist';
import RewindButton from '../components/playlist/RewindButton';
import FastForwardButton from '../components/playlist/FastForwardButton';
import SearchBar from '../components/playlist/SearchBar';


function PlaylistContainer(userId = 5) {

    const [playlists, setPlaylists] = useState([]);
    const [playlistIds, setPlaylistIds] = useState([])
    const [filteredPlaylistIds, setFilteredPlaylistIds] = useState([]);


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
            setPlaylistIds(idArray)
            setFilteredPlaylistIds(idArray);
        })

    }, []);


    const fastForwardPlaylist = () => {

        const playlistToBeModified = [...filteredPlaylistIds]

        const skippedPlaylist = playlistToBeModified.shift();
        playlistToBeModified.push(skippedPlaylist);

        setFilteredPlaylistIds(playlistToBeModified);

    }

    const rewindPlaylist = () => {

        const playlistToBeModified = [...filteredPlaylistIds]



        const lastPlaylist = playlistToBeModified.pop();
        playlistToBeModified.unshift(lastPlaylist);

        setFilteredPlaylistIds(playlistToBeModified);
    }

    function searchForSong(event) {

        let searchTerm = event.target.value.toLowerCase();

        let playlistWithSong = {};

        playlists.forEach(song => {
            if (song.song_name.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)) {
                playlistWithSong[song.playlist] = 1;
            }
        })

        let currentFilteredPlaylistIds = [];
        
        playlistIds.forEach((playlist) => {
            if (playlistWithSong[playlist]) {
                currentFilteredPlaylistIds.push(playlist);
            }
        })

        setFilteredPlaylistIds(currentFilteredPlaylistIds);

    }




    return (

        <div>
                {playlists.length > 0 ?
                    <div className="playlist-container">
                            <SearchBar searchForSong = {searchForSong} /> 
                            <RewindButton handleClick= {rewindPlaylist} />
                            <h1 className="playlist-name">{`Playlist ${filteredPlaylistIds[0]}`}</h1>
                            <FastForwardButton handleClick={fastForwardPlaylist}/>
                            <Playlist playlists = {playlists} playlistIds = {filteredPlaylistIds}/>
                    </div>
                :
                <p>Loading...</p>}
        </div>
    );
}

export default PlaylistContainer

