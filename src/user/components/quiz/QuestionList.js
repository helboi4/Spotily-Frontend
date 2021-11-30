import AnswerList from "./AnswerList";

const QuestionList = ({questions}) => {
    
    const questionKeys = Object.keys(questions.questionsAndOptions)

    const questionComponents = questionKeys.map(question => {
            return(
                <div>
                    <h2>{question}</h2>
                    <AnswerList answers={questions.questionsAndOptions[question]}/>
                </div>
            )
        });

        console.log(questionComponents)

        return(
            <div className="question-list">{questionComponents}</div>
        )

}

export default QuestionList;