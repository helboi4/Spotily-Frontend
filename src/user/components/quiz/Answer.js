const Answer = ({answer, questionNumber, handleClick}) => {
    return(
        <button type="button" className="answer-button" onClick = {() => {handleClick(answer, questionNumber);}}className ="answer">{answer}</button>
    )

}

export default Answer;