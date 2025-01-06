import { scrollToTop } from "../../utils/scrollAll";

import "./style.css"

import dot from "./Dot.svg";
import people from "./people.svg";
import arrow from "./Arrow.svg";

import leftLogo1 from "./leftLogo1.svg";
import leftLogo2 from "./leftLogo2.svg";
import leftLogo3 from "./leftLogo3.svg";
import leftLogo4 from "./leftLogo4.svg";

import carBgImg from './background-car.png';

const Header = () => {



    return (
      <div className="header-hold">
        <div className="header-cont">
          <img className="header-BgImg" src={carBgImg} alt="carBgImg" />
          <ul className="header-list">
            <li className="header-left-cont">
              <div className="header-left-title">
                Your Journey,
                <br /> Your Car,
                <br /> Your Way
              </div>

              <div className="left-text">
                Experience the ultimate freedom of choice with GoCar - tailor
                your adventure by choosing from our premium fleet of vehicles.
              </div>

              <div>
                <button className="left-btn">Get Started</button>
              </div>

              <div className="left-logos">
                <img src={leftLogo1} alt="" />
                <img src={leftLogo2} alt="" />
                <img src={leftLogo3} alt="" />
                <img src={leftLogo4} alt="" />
              </div>
            </li>

            <li className="center-card">
              <div className="center-numb">50+</div>
              <div className="center-text">
                Car Types
                <br /> Available
              </div>
              <img className="center-dot" src={dot} alt="23" />
            </li>

            <li className="right-column">
              <div className="right-text-cont">
                <img className="people-img" src={people} alt="333" />
                <div className="right-text">
                  <div className="right-text-title">12.5K+ PEOPLE</div>
                  <div className="right-text-desc">
                    has used our services such as renting, buying, or even
                    selling their car.
                  </div>
                </div>
              </div>

              <div className="right-other-func">
                <button className="right-other-btn" id="Rent">
                  Rent
                </button>
                <button className="right-other-btn">Buy</button>
                <button className="right-other-btn">Sell</button>
                <button className="right-other-btn" id="Consult">
                  Consult
                </button>

                <div className="learn-cont">
                  <div>Learn more</div>

                  <div>
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </li>


          </ul>

          <div className="scrollTop-cont">
            <button className="scrollTop-btn" onClick={() => scrollToTop()}></button>
          </div>

        </div>
      </div>
    );
}

export default Header;