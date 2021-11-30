import QuestionList from "../components/quiz/QuestionList"
import "./modal.css";

const QuizModal = ({questions, show, handleClose}) => {
    const showHideQuizModal= show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideQuizModal}>
            <section classname="modal-main">
                <button type="button" onClick={handleClose}>Close</button>
                {questions ?
                <QuestionList questions={questions} />
                :
                <p>Loading...</p>}
            
            </section>
        </div>

    )

}

export default QuizModal;