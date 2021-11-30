import Answer from "./Answer";

const AnswerList = ({answers}) => {
        const answerComponents = answers.map( answer => {
            return(
                <Answer answer = {answer}/>
            )
        })
        
    return(
        <div className = "answer-list">{answerComponents}</div>
    )

}

export default AnswerList;