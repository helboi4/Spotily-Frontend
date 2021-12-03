import QuestionList from "../components/quiz/QuestionList"
import "./modal.css";
import { useState } from "react";

const QuizModal = ({highlightAnswer, unHighlight, handleSubmit, questions, show, handleClose, handleUserResponse}) => {

    const showHideQuizModal= show ? "modal display-block" : "modal display-none";
    

    return (
        <div className={showHideQuizModal}>
            <section className="modal-main">
                <button className="close-submit" type="button" onClick={handleClose}>Close</button>
                {questions && questions.questionsAndOptions ?
                <QuestionList highlightAnswer={highlightAnswer} questions={questions} handleClick={handleUserResponse}/>
                :
                <p>Quiz not found. Please try again.</p>}
                <button className="close-submit" onClick={function(event){handleSubmit(); unHighlight()}} type="button">Submit</button>
            </section>
            
        </div>

    )

}

export default QuizModal;