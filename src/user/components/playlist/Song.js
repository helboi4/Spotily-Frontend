import {useState} from 'react';

const Song = ({song}) => {

        return(
            <div>
                <h3>{song.song_name}</h3>
                <p>{song.artist}</p>
            </div>
        )

}

export default Song;