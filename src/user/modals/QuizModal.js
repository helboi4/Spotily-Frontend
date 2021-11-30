import QuestionList from "../components/quiz/QuestionList"
import "./modal.css";

const QuizModal = ({questions, show, handleClose, handleClick}) => {

    console.log(questions);

    const showHideQuizModal= show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideQuizModal}>
            <section classname="modal-main">
                <button type="button" onClick={handleClose}>Close</button>
                {questions && questions.questionsAndOptions ?
                <QuestionList questions={questions} handleClick={handleClick}/>
                :
                <p>Quiz not found. Please try again.</p>}
            
            </section>
        </div>

    )

}

export default QuizModal;