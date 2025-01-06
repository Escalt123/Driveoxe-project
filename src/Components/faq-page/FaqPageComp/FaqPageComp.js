import "./style.css";

import FaqHeader from "../faq-page-header/FaqHeader.js";
import FaqPageQuestions from "../faq-page-questions/FaqPageQuestions.js";
import FaqFooter from "../faq-page-footer/FaqFooter.js";


const FaqPageComp = () => {
    return ( 
        <div>
            <FaqHeader/>
            <FaqPageQuestions/>
            <FaqFooter/>
        </div>
     );
}
 
export default FaqPageComp;