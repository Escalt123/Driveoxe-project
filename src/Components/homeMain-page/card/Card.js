
import { cardStorage } from '../../../helpers/cardStorage.js';
import "./style.css";


export function Card({cardId}) {

    const cardNumber = parseInt(cardId) - 1


    return (
        <li className="card-item">
            <img src={cardStorage[cardNumber].carImage} alt="" />

            <div className="card-title">
                {cardStorage[cardNumber].carName}
            </div>

            <div className="card-price">
                <div>
                    <div className="small-text">
                        Starting at
                    </div>

                    <div className="price-per-day">
                        {cardStorage[cardNumber].carPrice}/day
                    </div>
                </div>
                <button className="rent-btn">Rent</button>
            </div>
        </li>


    )
}

export default Card;