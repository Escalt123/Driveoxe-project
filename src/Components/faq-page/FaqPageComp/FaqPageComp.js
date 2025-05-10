import "./style.css";

import FaqHeader from "../faq-page-header/FaqHeader.js";
import FaqPageQuestions from "../faq-page-questions/FaqPageQuestions.js";
import FooterComp from '../../utils/footer/footerCompAll.js';

const FaqPageComp = () => {
    return ( 
        <div>
            <FaqHeader/>
            <FaqPageQuestions/>
            <FooterComp/>
        </div>
     );
}
 
export default FaqPageComp;