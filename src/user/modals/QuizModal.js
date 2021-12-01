import QuestionList from "../components/quiz/QuestionList"
import "./modal.css";

const QuizModal = ({handleSubmit, questions, show, handleClose, handleUserResponse}) => {

    console.log(questions);

    const showHideQuizModal= show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideQuizModal}>
            <section classname="modal-main">
                <button type="button" onClick={handleClose}>Close</button>
                {questions && questions.questionsAndOptions ?
                <QuestionList questions={questions} handleClick={handleUserResponse}/>
                :
                <p>Quiz not found. Please try again.</p>}
            
            </section>
            <button onClick={handleSubmit} type="button">Submit</button>
        </div>

    )

}

export default QuizModal;