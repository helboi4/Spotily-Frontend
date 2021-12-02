import React from 'react';



const Song = ({song}) => {

        return(
            <div className="playlist-song">
                <img className = "album-cover" src={`/albumCovers/spotilyAlbumCovers/${song.song_id}.jpg`} alt="album cover" />
                <h3>{song.song_name}</h3>
                <p>{song.artist}</p>
            </div>
        )

}

export default Song;