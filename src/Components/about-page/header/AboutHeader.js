import "./style.css";

import WomenInCar from "./WomenInCar.png";
import UnderLogo1 from "./Under-Logo1.svg";
import UnderLogo2 from "./Under-Logo2.svg";
import UnderLogo3 from "./Under-Logo3.svg";
import UnderLogo4 from "./Under-Logo4.svg";
import UnderLogo5 from "./Under-Logo5.svg";
import UnderLogo6 from "./Under-Logo6.svg";



const AboutHeader = () => {
    return (
    <div className="AboutHeader-cont">
        <div className="AboutHeader-title">
          <div className="AboutHeader-small-text">Home/About us</div>

          <div className="AboutHeader-big-text">Who We are</div>
        </div>

        <div className="AboutHeader-imgWomen-cont">
            <img src={WomenInCar} className="WomenInCar-img" alt="WomenInCar" />
        </div>

        <div className="AboutHeader-logos">
            <img src={UnderLogo1} alt="" />
            <img src={UnderLogo2} alt="" />
            <img src={UnderLogo3} alt="" />
            <img src={UnderLogo4} alt="" />
            <img src={UnderLogo5} alt="" />
            <img src={UnderLogo6} alt="" />
        </div>
    </div>
    );
}
 
export default AboutHeader;