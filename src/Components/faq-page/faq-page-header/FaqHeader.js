import "./style.css";

import СarDashboard from "./СarDashboard.png";

const FaqHeader = () => {
    return ( 
        <div className="FaqHeader-holder">
            <div className="FaqHeader-cont">

                <div className="FaqHeader-title">
                    <p>Home/FAQs</p>
                    <p className="FaqHeader-title-big">Frequently Asked Questions</p>
                </div>

                <div className="FaqHeader-СarDashboard">
                    <img src={СarDashboard} alt="СarDashboard" />
                </div>

            </div>
        </div>
     );
}
 
export default FaqHeader;