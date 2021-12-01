const Song = ({song}) => {

        return(
            <div className="playlist-song">
                <h3>{song.song_name}</h3>
                <p>{song.artist}</p>
            </div>
        )

}

export default Song;