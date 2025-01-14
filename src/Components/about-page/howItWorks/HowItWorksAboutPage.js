

import "./style.css";

import LineDashsedleft from "./LineDashsedleft.svg";
import selectImg from "./finger.svg";
import wheel from "./wheel.svg";
import bookImg from "./book.png";
import returnImg from "./return.png";

const HowItWorksAboutPage = () => {


    return (
      <div className="HowItWorksAboutPage-holder">
        <div className="HowItWorksAboutPage-cont">
          <p className="HowItWorksAboutPage-small-title">HOW IT WORKS</p>
          <p className="HowItWorksAboutPage-Big-title">
            Simple Steps to Get the Car
          </p>

          <div className="HowItWorksAboutPage-top-row">
            <div className="HowItWorksAboutPage-select-cont">
              <div className="HowItWorksAboutPage-img-card">
                <img src={selectImg} alt="" />

                <div className="mystery-circle-topRow">
                  <div className="circles-cont-about" id="last-circle-cont">
                    <div className="first-circle">
                      <div className="second-circle">
                        <div className="third-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="HowItWorksAboutPage-select-text">
                <p className="HowItWorksAboutPage-select-title">Select</p>
                <p className="HowItWorksAboutPage-select-desc">
                  Choose your desired car from our fleet.
                </p>
              </div>
            </div>

            <div className="HowItWorksAboutPage-drive-cont">
              <div className="HowItWorksAboutPage-drive-text">
                <p className="HowItWorksAboutPage-drive-title">Drive</p>
                <p className="HowItWorksAboutPage-drive-desc">
                  Pick up your car
                  <br /> and hit the road..
                </p>
              </div>

              <div className="HowItWorksAboutPage-img-card">
                <img src={wheel} alt="" />

                <div className="mystery-circle-topRow">
                  <div className="circles-cont-about" id="last-circle-cont">
                    <div className="first-circle">
                      <div className="second-circle">
                        <div className="third-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="LineDashsed">
            <img className="selectLine" src={LineDashsedleft} alt="" />
            <img className="BookLine" src={LineDashsedleft} alt="" />
            <img className="DriveLine" src={LineDashsedleft} alt="" />
            <img className="ReturnLine" src={LineDashsedleft} alt="" />
          </div>

          <div className="HowItWorksAboutPage-bottom-row">
            
            <div className="HowItWorksAboutPage-book-cont">
              <div className="HowItWorksAboutPage-img-card">
                <img src={bookImg} alt="" />
              </div>

              <div className="mystery-circle-bottomRow">
                <div className="circles-cont-about" id="last-circle-cont">
                  <div className="first-circle">
                    <div className="second-circle">
                      <div className="third-circle"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="HowItWorksAboutPage-book-text">
                <p className="HowItWorksAboutPage-book-title">Book</p>
                <p className="HowItWorksAboutPage-book-desc">
                  Reserve your car online or through our app.
                </p>
              </div>
            </div>

            <div className="HowItWorksAboutPage-return-cont">
              <div className="HowItWorksAboutPage-return-text">
                <p className="HowItWorksAboutPage-return-title">Return</p>
                <p className="HowItWorksAboutPage-return-desc">
                  Bring the car back at the end of your rental period.
                </p>
              </div>

              <div className="HowItWorksAboutPage-img-card">
                <img src={returnImg} alt="" />

                <div className="mystery-circle-bottomRow-return">
                  <div className="circles-cont-about" id="last-circle-cont">
                    <div className="first-circle">
                      <div className="second-circle">
                        <div className="third-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    );
}
 
export default HowItWorksAboutPage;