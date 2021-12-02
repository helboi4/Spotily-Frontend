import AnswerList from "./AnswerList";

const QuestionList = ({ highlightAnswer, questions, handleClick}) => {
    
    const questionKeys = Object.keys(questions.questionsAndOptions)

    const questionComponents = questionKeys.map((question, index) => {
            return(
                <div>
                    <h2>{question}</h2>
                    <AnswerList highlightAnswer={highlightAnswer} questionNumber={index} answers={questions.questionsAndOptions[question]} 
                    handleClick={handleClick}/>
                </div>
            )
        });

        console.log(questionComponents)

        return(
            <div className="question-list">{questionComponents}</div>
        )

}

export default QuestionList;