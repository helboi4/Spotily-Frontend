import Song from "./Song";

const Playlist = ({playlists, playlistIds}) => {


    if (!playlistIds) {
        return (
            <div className="playlist-songs">
                No playlists with this song
            </div>
        )
    } 
    else {
        const playlistComponents = playlists
        .filter(song => (song.playlist === playlistIds[0]))
        .map(song => {
            return(
                <Song className="song" song={song}/>
            )
        });

        return(
            <div className="playlist-songs">{playlistComponents}</div>
        )

        
    }
    
}

export default Playlist;