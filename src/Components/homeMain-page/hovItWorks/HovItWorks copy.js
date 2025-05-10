import "./style.css";
import appStore from "./appStore.svg";
import googlePlay from "./googlePlay.svg";


const HovItWorks = () => {

  return (
    <div className="hovItWorks-container">
      <div className="hovItWorks-cont">
        <div className="ss">
          <div className="hovItWorks-smallTitle">HOW IT WORKS</div>
          <div className="hovItWorks-bigTitle">
            Simple Steps to Get the Car
          </div>

          <div className="simple-steps-cont-inside">

            <div className="left-row">

              <div className="left-cont">
                <div className="left-desc">
                  <div className="left-simple-text">
                    <div className="left-title">Select</div>
                    Choose your desired car from our fleet.
                  </div>

                  <div className="left-img" ></div>
                </div>

                <div className="circles-cont">
                  <div className="first-circle">
                    <div className="second-circle">
                      <div className="third-circle"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ------ First row ------ */}

            <div className="right-row">
              <div className="right-cont">

                <div className="circles-cont">
                  <div className="first-circle">
                    <div className="second-circle">
                      <div className="third-circle"></div>
                    </div>
                  </div>
                </div>

                <div className="left-img" id="book-img"></div>

                <div className="right-desc">
                  <div className="right-text">
                    <div className="right-title">Book</div>
                    Reserve your car online or through our app.
                  </div>
                </div>
              </div>
            </div>

            {/* ------ Second row ------ */}

            <div className="left-row">

              <div className="left-cont">
                <div className="left-desc" id="third-row">
                  <div className="left-simple-text">
                    <div className="left-title">Drive</div>
                    Pick up your car <br /> and hit the road.
                  </div>

                  <div className="left-img" ></div>
                </div>

                <div className="circles-cont">
                  <div className="first-circle">
                    <div className="second-circle">
                      <div className="third-circle"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ------ Third row ------ */}

            <div className="right-row">
              <div className="right-cont">

                <div className="circles-cont" id="last-circle-cont">
                  <div className="first-circle">
                    <div className="second-circle">
                      <div className="third-circle"></div>
                    </div>
                  </div>
                </div>

                <div className="left-img" id="return-img"></div>

                <div className="right-desc">
                  <div className="right-text">
                    <div className="right-title">Return</div>
                    Bring the car back at the end of your rental period.
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

export default HovItWorks;