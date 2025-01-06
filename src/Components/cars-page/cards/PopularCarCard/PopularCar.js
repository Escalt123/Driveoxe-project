import "./style.css";

import { popularCarsStorage } from "./popularCarsStorage.js";


const PopularCar = ({cardId}) => {

    const cardNumber = parseInt(cardId) - 1

    return (
      <div className="PopularCar-cont">
        <img src={popularCarsStorage[cardNumber].carImage} className="PopularCar-img" alt="car" />

        <p className="PopularCar-text">{popularCarsStorage[cardNumber].carName}<br/>{popularCarsStorage[cardNumber].carPrice}/day</p>
      </div>
    );
}
 
export default PopularCar;