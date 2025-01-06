import "./style.css";

import CarsBgRed from "./CarsBgRed.png";


const HeaderCarsPage = () => {
    return (
      <div className="HeaderCarsPage-cont">
        <div className="HeaderCarsPage-title">
          <div className="HeaderCarsPage-small-text">HOME/CARS</div>

          <div className="HeaderCarsPage-big-text">Our Impressive Way To Go</div>
        </div>

        <div className="HeaderCarsPage-imgWomen-cont">
          <img src={CarsBgRed} className="CarsBgRed-img" alt="CarsBgRed" />
        </div>
      </div>
    );
}

export default HeaderCarsPage;