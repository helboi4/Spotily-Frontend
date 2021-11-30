import React from 'react';
import {useState, useEffect} from 'react';
import QuizModal from "../modals/QuizModal"
import GeneratedPlaylistModal from '../modals/GeneratedPlaylistModal';
import QuizButton from "../components/quiz/QuizButton"

export default function QuizContainer() {

    const[questions, setQuestions] = useState()
    const[showQuiz, setShowQuiz] = useState(false)
    const[showGeneratedPlaylist, setShowGeneratedPlaylist] = useState(false)
    const[userResponseList, setUserResponseList] = useState([]);
    const[generatedPlaylist, setGeneratedPlaylist] = useState([])

    useEffect(() => {
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
    },[]);

    const initialiseEmptyUserResponseArray = (data) => {
        if (data.questionsAndOptions) {

            let emptyUserResponses = Array(Object.keys(data.questionsAndOptions).length).fill("");
            setUserResponseList(emptyUserResponses);
            console.log(emptyUserResponses);
        }
    }

    const submitQuiz = () => {
        const submission = Object.assign({}, questions)
        submission.userId = 5
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

        console.log(generatedPlaylist)

        setShowQuiz(false)
        setShowGeneratedPlaylist(true)
    }

    const showQuizModal = () =>{
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
        <div>
            <QuizButton handleClick = {showQuizModal} />
            <QuizModal handleSubmit={submitQuiz} questions={questions} show={showQuiz} handleClose={hideQuizModal} handleUserResponse={logUserResponse}/>
            <GeneratedPlaylistModal show={showGeneratedPlaylist} handleClose ={hideGeneratedPlaylistModal} generatedPlaylist={generatedPlaylist}/>
        </div>
    )
};
