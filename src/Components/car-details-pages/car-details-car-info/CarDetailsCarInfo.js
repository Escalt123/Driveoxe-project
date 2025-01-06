import './style.css';

import VanguardCX2DetailsTop from './images/VanguardCX2DetailsTop.png';
import VanguardCX2DetailsBottom1 from './images/VanguardCX2DetailsBottom1.png';
import VanguardCX2DetailsBottom2 from './images/VanguardCX2DetailsBottom1.png';
import VanguardCX2DetailsBottom3 from './images/VanguardCX2DetailsBottom1.png';

import ConvertibleImg from './images/ConvertibleImg.svg';
import V8Img from './images/V8Img.svg';
import HpImg from './images/HpImg.svg';
import AutomaticImg from './images/AutomaticImg.svg';
import PassengersChairImg from './images/PassengersChairImg.svg';




const CarDetailsCarInfo = () => {
    return ( 
        <div className="CarDetailsCarInfo-hold">
            <div className="CarDetailsCarInfo-cont">
                <div className="CarDetailsCarInfo-Pictures">
                    <img className="CarDetailsCarInfo-topImg" src={VanguardCX2DetailsTop} alt="VanguardCX2Details" />

                    <ul className="CarDetailsCarInfo-bottomImages">
                        <li><img src={VanguardCX2DetailsBottom1} alt="VanguardCX2DetailsBottom1" /></li>
                        <li><img src={VanguardCX2DetailsBottom2} alt="VanguardCX2DetailsBottom2" /></li>
                        <li><img src={VanguardCX2DetailsBottom3} alt="VanguardCX2DetailsBottom3" /></li>
                    </ul>
                </div>

                <div className="CarDetailsCarInfo-desc">
                    <p className="CarDetailsCarInfo-Title">Vanguard CX2 Convertible</p>

                    <div className="CarDetailsCarInfo-Price-cont">
                        STARTING AT
                        <div className="CarDetailsCarInfo-Price">$59/day</div>
                    </div>

                    <p className="CarDetailsCarInfo-text">
                        Elevate your journey with the Ford Mustang Convertible, the 
                        epitome of American muscle and open-air excitement. Feel 
                        the wind in your hair as you experience the power, style, and 
                        iconic allure of this classic masterpiece. Cruise with 
                        confidence, top down.
                    </p>
                    
                    <div className="CarDetailsCarInfo-BookNow-cont">
                        <div className="CarDetailsCarInfo-BookNow-counter">
                            <button></button>
                            <p>1</p>
                            <button id="CarDetailsCarInfo-plus"></button>
                        </div>

                        <div className="CarDetailsCarInfo-BookNow-btn">
                            <button>Book Now</button>
                        </div>
                    </div>

                    <div className="CarDetailsCarInfo-Specifications-cont">
                        <p>SPECIFICATIONS</p>

                        <ul className="CarDetailsCarInfo-Specifications-list">
                            <li><img src={ConvertibleImg} alt="ConvertibleImg" /> Convertible</li>
                            <li><img src={AutomaticImg} alt="AutomaticImg" /> Automatic</li>
                            <li><img src={V8Img} alt="V8Img" /> 5.0-liter V8</li>
                            <li><img src={PassengersChairImg} alt="PassengersChairImg" /> 4 passengers</li>
                            <li><img src={HpImg} alt="HpImg" /> 450 HP</li>
                        </ul>

                        <p>IN COLOR</p>
                        
                        <ul className="CarDetailsCarInfo-Color-list">
                            <li id="Color-Car-red"></li>
                            <li id="Color-Car-black"></li>
                            <li id="Color-Car-white"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CarDetailsCarInfo;