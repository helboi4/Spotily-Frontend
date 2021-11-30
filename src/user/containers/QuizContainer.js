import React from 'react';
import {useState, useEffect} from 'react';
import QuizModal from "../modals/QuizModal"
import QuestionList from "../components/quiz/QuestionList"
import QuizButton from "../components/quiz/QuizButton"

export default function QuizContainer() {

    const[questions, setQuestions] = useState()
    const[showQuiz, setShowQuiz] = useState(true)
    const[userResponseList, setUserResponseList] = useState([]);

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

    const showQuizModal = () =>{
        setShowQuiz(true)
    }

    const hideQuizModal = () => {
        setShowQuiz(false)
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
            <QuizModal questions={questions} show={showQuiz} handleClose={hideQuizModal} handleClick={logUserResponse}/>
        </div>
    )
};
