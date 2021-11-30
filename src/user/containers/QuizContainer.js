import React from 'react';
import {useState, useEffect} from 'react';
import QuizModal from "../modals/QuizModal"
import QuestionList from "../components/quiz/QuestionList"
import QuizButton from "../components/quiz/QuizButton"

export default function QuizContainer() {

    const[questions, setQuestions] = useState()
    const[showQuiz, setShowQuiz] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8080/api/quiz/getquiz", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
            })
            .then(response => response.json())
            .then(data => (setQuestions(data)))
            console.log(questions)
    },[]);

    const showQuizModal = () =>{
        setShowQuiz(true)
    }

    const hideQuizModal = () => {
        setShowQuiz(false)
    }

    return (
        <div>
            
            <QuizModal questions={questions} show={showQuiz} handleClose={hideQuizModal}/>
        </div>
    )
};
