import "./style.css";

import Customer from "./images/Customer.svg";
import Innovation from "./images/Innovation.svg";
import Safety from "./images/Safety.svg";
import Sustainable from "./images/Sustainable.svg";
import Best from "./images/Best.svg";
import Business from "./images/Business.svg";
import Community from "./images/Community.svg";
import Industry from "./images/Industry.svg";

const Achievements = () => {
  return (
    <div className="Achievements-holder">

      <div>
        <div className="Achievements-cont">
          <div className="Achievements-AllTitle">
            <p className="Achievements-smallTitle">ACHIEVEMENTS</p>
            <p className="Achievements-bigTitle">Let’s See Our Celebrate Milestones</p>
          </div>

          <div className="Achievements-desc">
            <ul className="Achievements-desc-row" id="first-row">
              <li className="Achievements-desc-item">
                <img src={Customer} alt="Customer" />
                <p>Customer Choice Award</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Safety} alt="Safety" />
                <p>Safety Drive Excellence</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Innovation} alt="Innovation" />
                <p>Innovation Champion</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Sustainable} alt="Sustainable" />
                <p>Sustainable Travel Partner</p>
              </li>
            </ul>

            <ul className="Achievements-desc-row">
              <li className="Achievements-desc-item">
                <img src={Best} alt="Best" />
                <p>Best Customer Support</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Business} alt="Business" />
                <p>Business Growth Milestone</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Community} alt="Community" />
                <p>Community Engagement</p>
              </li>

              <li className="Achievements-desc-item">
                <img src={Industry} alt="Industry" />
                <p>Industry Leadership</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="FooterAboutPage-black-car">
        <p>Reserve Your Dream Car Today and Feel Best Experience Travel</p>

        <button>Let’s Drive with Us</button>
      </div>

    </div>
  );
}

export default Achievements;