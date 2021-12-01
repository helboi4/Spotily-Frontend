import React from 'react';
import {useState, useEffect} from 'react';
import Playlist from '../components/playlist/Playlist';
import RewindButton from '../components/playlist/RewindButton';
import FastForwardButton from '../components/playlist/FastForwardButton';
import SearchBar from '../components/playlist/SearchBar';
import QuizModal from "../modals/QuizModal"
import GeneratedPlaylistModal from '../modals/GeneratedPlaylistModal';
import QuizButton from "../components/quiz/QuizButton";


export default function UserContainer({userID}) {

    const [playlists, setPlaylists] = useState([]);
    const [playlistIds, setPlaylistIds] = useState([])
    const [filteredPlaylistIds, setFilteredPlaylistIds] = useState([]);
    const[questions, setQuestions] = useState();
    const[showQuiz, setShowQuiz] = useState(false);
    const[showGeneratedPlaylist, setShowGeneratedPlaylist] = useState(false);
    const[userResponseList, setUserResponseList] = useState([]);
    const[generatedPlaylist, setGeneratedPlaylist] = useState([]);

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
            console.log(userID)
            data.forEach(song => {
                if(song.userid === userID){
                (idObject[song.playlist] = 1)
                }
            })
            idArray = Object.keys(idObject)
            .map(key => (parseInt(key)));
            setPlaylistIds(idArray)
            setFilteredPlaylistIds(idArray);
            console.log(`uo ${idArray}`)
        });
    }, []);

    const generateQuiz = () => {
        fetch("http://localhost:8080/api/quiz/getquiz", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
            })
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                initialiseEmptyUserResponseArray(data)})
    }

    const fetchPlaylists = () => {
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
            data.forEach(song => {
                if(song.userid === userID){
                (idObject[song.playlist] = 1)
                }})
            idArray = Object.keys(idObject)
            .map(key => (parseInt(key)));
            setPlaylistIds(idArray)
            setFilteredPlaylistIds(idArray);
            console.log(`Hi ${idArray}`);
        });
    }

    const fastForwardPlaylist = () => {

        const playlistToBeModified = [...filteredPlaylistIds]

        if(playlistToBeModified.length > 0){

            const skippedPlaylist = playlistToBeModified.shift();
            playlistToBeModified.push(skippedPlaylist);

            setFilteredPlaylistIds(playlistToBeModified);
        }
    }

    const rewindPlaylist = () => {

        const playlistToBeModified = [...filteredPlaylistIds]

        if(playlistToBeModified.length > 0){

            const lastPlaylist = playlistToBeModified.pop();
            playlistToBeModified.unshift(lastPlaylist);

            setFilteredPlaylistIds(playlistToBeModified);
        }
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

    const initialiseEmptyUserResponseArray = (data) => {
        if (data.questionsAndOptions) {

            let emptyUserResponses = Array(Object.keys(data.questionsAndOptions).length).fill("");
            setUserResponseList(emptyUserResponses);
            console.log(emptyUserResponses);
        }
    }

    const submitQuiz = () => {
        const submission = Object.assign({}, questions)
        submission.userId = userID
        submission.answers = userResponseList
        
        console.log(submission)

        const submissionJSON = JSON.stringify(submission)

        console.log(submissionJSON)

        fetch("http://localhost:8080/api/quiz/submit-return", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: submissionJSON
        })
        .then(response => response.json())
        .then(data => setGeneratedPlaylist(data))
        .then(()=> {setShowQuiz(false)})
        .then(() => {setShowGeneratedPlaylist(true)})
        .then(() => {fetchPlaylists()})
        .then(() => {console.log(generatedPlaylist)});

    }

    const showQuizModal = () =>{
        generateQuiz()
        setShowQuiz(true)
    }

    const hideQuizModal = () => {
        setShowQuiz(false)
    }

    const showGeneratedPlaylistModal = () => {
        setShowGeneratedPlaylist(true)
    }

    const hideGeneratedPlaylistModal = () => {
        setShowGeneratedPlaylist(false)
    }

    const logUserResponse = (answer, questionNumber) => {


        let userResponsesToBeModified = [...userResponseList];
        userResponsesToBeModified[questionNumber] = answer;
        setUserResponseList(userResponsesToBeModified);

        console.log(userResponsesToBeModified);
        

    }

    return (
        <>
            <QuizButton handleClick = {showQuizModal} />
            <QuizModal handleSubmit={submitQuiz} questions={questions} show={showQuiz} handleClose={hideQuizModal} handleUserResponse={logUserResponse}/>
            <GeneratedPlaylistModal show={showGeneratedPlaylist} handleClose ={hideGeneratedPlaylistModal} generatedPlaylist={generatedPlaylist} playlistNumbers={playlistIds}/>

            <>
                {playlists.length > 0 ?
                    <div className="playlist-container">
                            <SearchBar searchForSong = {searchForSong} /> 
                            <RewindButton handleClick= {rewindPlaylist} />
                            {/* <h1 className="playlist-name">{`Playlist ${filteredPlaylistIds[0]}`}</h1> */}
                            <FastForwardButton handleClick={fastForwardPlaylist}/>
                            <Playlist playlists = {playlists} filteredPlaylistIds = {filteredPlaylistIds} playlistNumbers={playlistIds}/>
                    </div>
                :
                    <p>Loading...</p>}
            </>
        </>
    )
}
