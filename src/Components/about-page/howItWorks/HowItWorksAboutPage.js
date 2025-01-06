

import "./style.css";

import LineDashsedleft from "./LineDashsedleft.svg";

const HowItWorksAboutPage = () => {


    return (
      <div className="HowItWorksAboutPage-holder">
        <div className="HowItWorksAboutPage-cont">
          <p className="HowItWorksAboutPage-small-title">HOW IT WORKS</p>
          <p className="HowItWorksAboutPage-Big-title">
            Simple Steps to Get the Car
          </p>
          <div className="HowItWorksAboutPage-desc-row">
            <div className="HowItWorksAboutPage-select-cont">
              <div className="HowItWorksAboutPage-select-block"></div>

              <div className="HowItWorksAboutPage-select-text">
                <p>Select</p>
                <p>Choose your desired car from our fleet.</p>
              </div>
            </div>

            <div className="HowItWorksAboutPage-drive-cont">
              <div className="HowItWorksAboutPage-drive-text">
                <p>Drive</p>
                <p>
                  Pick up your car <br /> and hit the road
                </p>
              </div>

              <div className="HowItWorksAboutPage-drive-block"></div>
            </div>
          </div>
          {/* ------------------ */}
          <div className="HowItWorksAboutPage-dot-row">
            <div className="circles-cont" id="last-circle-cont">
              <div className="test-hover-circle">
                <div className="first-circle">
                  <div className="second-circle">
                    <div className="third-circle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="HowItWorksAboutPage-LineDashsedleft">
              <img src={LineDashsedleft} alt="LineDashsedleft" />
            </div>

            <div className="circles-cont-no-margin-left">
              <div className="circles-cont" id="last-circle-cont">
                <div className="first-circle">
                  <div className="second-circle">
                    <div className="third-circle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="HowItWorksAboutPage-LineDashsedleft">
              <img src={LineDashsedleft} alt="LineDashsedleft" />
            </div>

            <div className="HowItWorksAboutPage-LineDashsedleft">
              <img src={LineDashsedleft} alt="LineDashsedleft" />
            </div>

            <div className="circles-cont-no-margin-left">
              <div className="circles-cont" id="last-circle-cont">
                <div className="first-circle">
                  <div className="second-circle">
                    <div className="third-circle"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="HowItWorksAboutPage-LineDashsedleft">
              <img src={LineDashsedleft} alt="LineDashsedleft" />
            </div>

            <div className="circles-cont-no-margin-left">
              <div className="circles-cont" id="last-circle-cont">
                <div className="first-circle">
                  <div className="second-circle">
                    <div className="third-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------- */}

          <div className="HowItWorksAboutPage-desc-row" id="lastRow">
            <div className="HowItWorksAboutPage-book-cont">
              <div
                className="HowItWorksAboutPage-select-block"
                id="book-img"
              ></div>

              <div className="HowItWorksAboutPage-select-text">
                <p>Book</p>
                <p>Reserve your car online or through our app.</p>
              </div>
            </div>

            <div className="HowItWorksAboutPage-return-cont">
              <div className="HowItWorksAboutPage-drive-text">
                <p>Return</p>
                <p>Bring the car back at the end of your rental period.</p>
              </div>

              <div
                className="HowItWorksAboutPage-drive-block"
                id="return-img"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default HowItWorksAboutPage;