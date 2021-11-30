import "./modal.css";
import Playlist from "../components/playlist/Playlist"

const GeneratedPlaylistModal = ({show, handleClose, generatedPlaylist}) => {
    const showHideGeneratedPlaylistModal= show ? "modal display-block" : "modal display-none";
    
    if(generatedPlaylist.length > 0){
        const generatedPlaylistId = [generatedPlaylist[0].playlist]
        return (
            <div className={showHideGeneratedPlaylistModal}>
                <section classname="modal-main">
                    <button type="button" onClick={handleClose}>Close</button>
                    {generatedPlaylist.length > 0?
                    <Playlist playlists={generatedPlaylist} playlistIds={generatedPlaylistId}/>
                    :
                    <p>Playlist failed to generate. Please try again.</p>}
                
                </section>
            </div>

        )
    }else{
        return(
            <div className={showHideGeneratedPlaylistModal}>
                {handleClose()}
            </div>
        )
    }
    
}

export default GeneratedPlaylistModal;