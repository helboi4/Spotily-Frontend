import Song from "./Song";

const Playlist = ({playlists, playlistIds}) => {
    const playlistComponents = playlists
    .filter(song => (song.playlist === playlistIds[0]))
    .map(song => {
        return(
            <Song song={song}/>
        )
    });

    return(
        <div className="playlist">{playlistComponents}</div>
    )


}

export default Playlist;