import AnswerList from "./AnswerList";

const QuestionList = ({ highlightAnswer, questions, handleClick}) => {
    
    const questionKeys = Object.keys(questions.questionsAndOptions)

    const createImagePath = (question) => {
        let resultString = ""
        if(question.charAt(question.length -1) == "?" ){
            resultString = question.substring(0, question.length -1);
            resultString = resultString.toLowerCase();
            console.log(resultString)
            return resultString;
        }else{
            resultString = question.toLowerCase();
            console.log("else" + resultString)
            return resultString;
        }

    }

    const questionComponents = questionKeys.map((question, index) => {
            return(
                <div>
                    <h2>{question}</h2>
                    <img className="quiz-image" src={`/images/quiz/${createImagePath(question)}.jpg`}/>
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