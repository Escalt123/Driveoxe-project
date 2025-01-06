import "./style.css"

import HorizonMirageConvertible from "./img/HorizonMirageConvertible.svg";
import VanguardPhoenixCClass from "./img/VanguardPhoenixCClass.svg";
import ApexAutosTyphoonModel3 from "./img/ApexAutosTyphoonModel3.svg";
import RadiantSolsticeConvertible from "./img/RadiantSolsticeConvertible.svg";
import AuroraX5NebulaMinivan from "./img/AuroraX5NebulaMinivan.svg";


const CarDetailsAlsoLike = () => {
    return ( 
        <div className="CarDetailsAlsoLike-holder">
            <div className="CarDetailsAlsoLike-cont">

                <div className="CarDetailsAlsoLike-title-cont">
                    <p>You may also like</p>

                    <div className="CarDetailsAlsoLike-title-btns">
                        <button></button>
                        <button id="btn-slide-right"></button>
                    </div>
                </div>

                <div className="CarDetailsAlsoLike-carList-cont">

                    <ul>
                        <li className="CarDetailsAlsoLike-carList-item">
                            <img src={HorizonMirageConvertible} alt="HorizonMirageConvertible" />
                            <p>Vanguard Phoenix C-Class</p>
                            <p id="item-Price">$59/day</p>
                        </li>

                        <li className="CarDetailsAlsoLike-carList-item">
                            <img src={VanguardPhoenixCClass} alt="VanguardPhoenixCClass" />
                            <p>Horizon Mirage Convertible</p>
                            <p id="item-Price">$49/day</p>
                        </li>

                        <li className="CarDetailsAlsoLike-carList-item">
                            <img src={ApexAutosTyphoonModel3} alt="ApexAutosTyphoonModel3" />
                            <p>Apex Autos Typhoon Model 3</p>
                            <p id="item-Price">$59/day</p>
                        </li>

                        <li className="CarDetailsAlsoLike-carList-item">
                            <img src={RadiantSolsticeConvertible} alt="RadiantSolsticeConvertible" />
                            <p>Radiant Solstice Convertible</p>
                            <p id="item-Price">$79/day</p>
                        </li>

                        <li className="CarDetailsAlsoLike-carList-item">
                            <img src={AuroraX5NebulaMinivan} alt="AuroraX5NebulaMinivan" />
                            <p>Aurora X5 Nebula Minivan</p>
                            <p id="item-Price">$59/day</p>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
     );
}
 
export default CarDetailsAlsoLike;