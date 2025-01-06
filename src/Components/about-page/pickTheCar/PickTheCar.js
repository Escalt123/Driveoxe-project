import "./style.css";

import carImg from "./car.png";
import ArrowBtn from "./Arrow1.png";

const PickTheCar = () => {
    return (
      <div className="PickTheCar-holder">

        <div className="PickTheCar-cont">
          <div className="PickTheCar-redUpper-cont">

            <a className="PickTheCar-link-cont" href="/Cars">
              <button className="PickTheCar-btn">
                  <img src={ArrowBtn} alt="" />
              </button>

              <div className="PickTheCar-redUpper-text">
                PICK THE CAR!
              </div>
            </a>
          </div>

          <img src={carImg} className="carImg" alt="carImg" />

          <div className="Our-Journey-holder">
            <div className="Our-Journey-cont">
              <div className="Our-Journey-text">
                <div className="Our-Journey-value">
                  <div className="Our-Journey-smallTitle">OUR JOURNEY</div>
                  <div className="Our-Journey-bigTitle">
                    Pioneering Premium Car Rentals
                  </div>
                  <div className="Our-Journey-desc">
                    Drivoxe embarked on a remarkable journey over a decade ago,
                    driven by a relentless passion for redefining the travel
                    experience. From the outset, our mission was clear: to
                    provide the finest vehicles and exceptional service to make
                    every journey unforgettable. We've upheld our commitment to
                    delivering quality and variety, offering a diverse range of
                    meticulously maintained vehicles to ensure you always drive
                    in style.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PickTheCar;