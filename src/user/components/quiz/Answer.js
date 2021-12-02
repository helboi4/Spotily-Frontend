import {useState} from "react";

const Answer = ({highlightAnswer, answer, questionNumber, handleClick}) => {

    const [thisHighlightAnswer, setThisHighlightAnswer] = useState(false)

    const highlight = () => {
        setThisHighlightAnswer(!thisHighlightAnswer)
    }

    return(
        <button type="button" className={highlightAnswer && thisHighlightAnswer ? "answer-chose" : "answer"} onClick = {function(event){handleClick(answer, questionNumber); highlight()}}>{answer}</button>
    )

}

export default Answer;