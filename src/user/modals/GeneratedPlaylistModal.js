import "./modal.css";
import Playlist from "../components/playlist/Playlist"

const GeneratedPlaylistModal = ({show, handleClose, generatedPlaylist, playlistNumbers}) => {
    const showHideGeneratedPlaylistModal= show ? "modal display-block" : "modal display-none";
    
    if(generatedPlaylist.length > 0){
        const generatedPlaylistId = [generatedPlaylist[0].playlist]
        return (
            <div className={showHideGeneratedPlaylistModal}>
                <section classname="modal-main">
                    <button className="close-submit" type="button" onClick={handleClose}>Close</button>
                    {generatedPlaylist.length > 0?
                    <Playlist playlists={generatedPlaylist} filteredPlaylistIds={generatedPlaylistId} playlistNumbers={playlistNumbers}/>
                    :
                    <p>Playlist failed to generate. Please try again.</p>}
                
                </section>
            </div>

        )
    }else{
        return(
            <div className={showHideGeneratedPlaylistModal}>
                <h1>BlueChickenFM is the best</h1>
            </div>
        )
    }
    
}

export default GeneratedPlaylistModal;