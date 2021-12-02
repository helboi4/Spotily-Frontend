import Song from "./Song";

const Playlist = ({playlists, filteredPlaylistIds, playlistNumbers}) => {


    if (filteredPlaylistIds.length === 0) {
        return (
            <>
            <h1 className="playlist-name">No Playlists</h1>
            <div className="playlist-songs">
            </div>
            </>
        )
    } 
    else {
        const playlistComponents = playlists
        .filter(song => (song.playlist === filteredPlaylistIds[0]))
        .map(song => {
            return(
                <Song className="song" song={song}/>
            )
        });

        return(
            <>
                <h1 className="playlist-name">{`Playlist ${playlistNumbers.indexOf(filteredPlaylistIds[0]) + 1}`}</h1>
                <div className="playlist-songs">{playlistComponents}</div> 
            </>
        )

        
    }
    
}

export default Playlist;