import arrowUp from "./arrowUp.svg";

import FaqStorage from "../../../helpers/FaqStorage.js";


const Question = ({QuestionID}) => {

    const QuestionNumber= parseInt(QuestionID) - 1


    return (
        <ul className="Questions-list">
            <li>
                <p className="Questions-listItem-title">{FaqStorage[QuestionNumber].title}<img className="ArrowImgQuestion" src={arrowUp} alt=""/></p>
                <p className="Questions-listItem-text" style={{visibility: "hidden"}}>{FaqStorage[QuestionNumber].text}</p>
            </li>
        </ul>
     );
}
 
export default Question;