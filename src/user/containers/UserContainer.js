import React from 'react';
import {useState, useEffect} from 'react';
import Playlist from '../components/playlist/Playlist';
import RewindButton from '../components/playlist/RewindButton';
import FastForwardButton from '../components/playlist/FastForwardButton';
import SearchBar from '../components/playlist/SearchBar';
import QuizModal from "../modals/QuizModal"
import GeneratedPlaylistModal from '../modals/GeneratedPlaylistModal';
import QuizButton from "../components/quiz/QuizButton";
import LogoutButton from "../components/LogoutButton"
import SettingsButton from "../components/SettingsButton"
import SettingsModal from "../modals/SettingsModal"
import './UserContainer.css';

export default function UserContainer({userID, setUserID, getData}) {

    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [playlists, setPlaylists] = useState([]);
    const [playlistIds, setPlaylistIds] = useState([])
    const [filteredPlaylistIds, setFilteredPlaylistIds] = useState([]);
    const[questions, setQuestions] = useState();
    const[showQuiz, setShowQuiz] = useState(false);
    const[showGeneratedPlaylist, setShowGeneratedPlaylist] = useState(false);
    const[showSettings, setShowSettings] = useState(false)
    const[userResponseList, setUserResponseList] = useState([]);
    const[generatedPlaylist, setGeneratedPlaylist] = useState([]);
    const[highlightAnswer, setHighlightAnswer] = useState(true)

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
                if(song.userid === getData()){
                (idObject[song.playlist] = 1)
                }
            })
            idArray = Object.keys(idObject)
            .map(key => (parseInt(key)));
            setPlaylistIds(idArray)
            setFilteredPlaylistIds(idArray);
            console.log(`uo ${idArray}`)
        });
        fetch("http://localhost:8080/api/user/allUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
        })
        .then(response => response.json())
        .then(data => {
            const user = data.filter(user => user.id === getData())
            const username = user[0].username
            const email = user[0].email
            setUserName(username)
            setUserEmail(email)
        });
    }, [getData()]);

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

    const showSettingsModal = () => {
        setShowSettings(true)
    }

    const hideSettingsModal = () => {
        setShowSettings(false)
    }

    const logUserResponse = (answer, questionNumber) => {


        let userResponsesToBeModified = [...userResponseList];
        userResponsesToBeModified[questionNumber] = answer;
        setUserResponseList(userResponsesToBeModified);

        console.log(userResponsesToBeModified);
        

    }

    const submitSettingsForm = () => {
        const userToSubmit = {
            "username": userName,
            "email": userEmail,
            "admin": false
        }

        const userToSubmitJSON = JSON.stringify(userToSubmit)

        fetch(`http://localhost:8080/api/user/update/${userID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                },
            body: userToSubmitJSON
        })


    }


    const unHighlight = () => {
        setHighlightAnswer(false);
    }

    const highlight = () => {
        setHighlightAnswer(true);
    }

    return (
        <div className="userContainer">
            <div className="icon-area">
                <LogoutButton className="icon-button" setUserID={setUserID}/>
                <SettingsButton className="icon-button" handleClick={showSettingsModal}/>
            </div>
            
            <div className="photo-area">
                <div className="logo"></div>
                <QuizButton handleClick = {function(event){showQuizModal(); highlight()}} />
                <SearchBar searchForSong = {searchForSong} />
            </div>
            <QuizModal highlightAnswer={highlightAnswer} unHighlight={unHighlight} handleSubmit={submitQuiz} questions={questions} show={showQuiz} handleClose={hideQuizModal} handleUserResponse={logUserResponse}/>
            <SettingsModal handleSubmit={submitSettingsForm} show={showSettings} handleClose={hideSettingsModal} userName={userName} userEmail={userEmail} setUserName={setUserName} setUserEmail={setUserEmail} />
            <GeneratedPlaylistModal show={showGeneratedPlaylist} handleClose ={hideGeneratedPlaylistModal} generatedPlaylist={generatedPlaylist} playlistNumbers={playlistIds}/>
                
            {playlists.length > 0 ?
                <div className="playlist-container">
                        <RewindButton handleClick= {rewindPlaylist} />
                        {/* <h1 className="playlist-name">{`Playlist ${filteredPlaylistIds[0]}`}</h1> */}
                        <FastForwardButton handleClick={fastForwardPlaylist}/>
                        <Playlist playlists = {playlists} filteredPlaylistIds = {filteredPlaylistIds} playlistNumbers={playlistIds}/>
                </div>
            :
                <p>Loading...</p>}
        </div>
    )
}
