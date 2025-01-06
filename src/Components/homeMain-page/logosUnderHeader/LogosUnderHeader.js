import "./style.css";

import logo1 from "./Under-Logo1.svg";
import logo2 from "./Under-Logo2.svg";
import logo3 from "./Under-Logo3.svg";
import logo4 from "./Under-Logo4.svg";
import logo5 from "./Under-Logo5.svg";
import logo6 from "./Under-Logo6.svg";

const LogosUnderHeader = () => {
    return (
      <div className="under-logos-holder">
        <div className="under-logos-cont">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    );
}

export default LogosUnderHeader;