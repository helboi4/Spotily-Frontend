import Song from "./Song";

const Playlist = ({playlists, playlistIds}) => {

    console.log(playlistIds);

    if (!playlistIds) {
        return (
            <div>
                No playlists with this song
            </div>
        )
    } 
    else {
        console.log(playlists)
        console.log(playlistIds)
        const playlistComponents = playlists
        .filter(song => (song.playlist === playlistIds[0]))
        .map(song => {
            return(
                <Song song={song}/>
            )
        });
        console.log(playlistComponents)

        return(
            <div className="playlist">{playlistComponents}</div>
        )

        
    }
    
}

export default Playlist;