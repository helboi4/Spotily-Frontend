import Answer from "./Answer";

const AnswerList = ({answers, questionNumber, handleClick}) => {
        const answerComponents = answers.map( (answer, index) => {
            return(
                <Answer key={index} answer = {answer} questionNumber={questionNumber} handleClick={handleClick}/>
            )
        })
        
    return(
        <div className = "answer-list">{answerComponents}</div>
    )

}

export default AnswerList;