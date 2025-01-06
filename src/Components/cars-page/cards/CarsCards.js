import './style.css';

import Card from '../../homeMain-page/card/Card';
import PopularCar from './PopularCarCard/PopularCar';

import ArowDownImg from "./ArowDown.svg";
import FindImg from "./find.svg";
import ArrowLeft from "./ArrowLeft.svg";

const CarsCards = () => {
    return (
      <div className="CarsCards-holder">
        <div className="CarsCards-cont">
          <div className="CarsCards-topRow">
            <div className="CarsCards-ShowingResults">
              Showing 1–9 of 24 results
            </div>

            <div className="CarsCards-Sorting">
              <div className="CarsCards-Sorting-text">Default Sorting</div>

              <img src={ArowDownImg} alt="ArowDownImg" />
            </div>

            <div className="CarsCards-Searching">
              <div className="CarsCards-Searching-text">
                Search Your Pick Car....
              </div>

              <img src={FindImg} alt="FindImg" />
            </div>
          </div>

          {/* ------------ */}

          <div className="CarsCards-catalog-cont">
            <ul className="cards-list card-list-cars-page">
              <Card cardId="1" />
              <Card cardId="2" />
              <Card cardId="3" />
              <Card cardId="4" />
              <Card cardId="5" />
              <Card cardId="6" />
              <Card cardId="7" />
              <Card cardId="8" />
              <Card cardId="9" />
            </ul>

            <div className="CarsCards-tags-cont">
              <p>POPULAR CARS</p>

              <div className="Popular-car-column">
                <PopularCar cardId="1" />
                <PopularCar cardId="2" />
                <PopularCar cardId="3" />
                <PopularCar cardId="4" />
              </div>

              <p className="CATEGORIES">CATEGORIES</p>

              <div className="CarsCards-tags-categories-cont">
                <ul className="Categories-column">
                  <li>Hatchback</li>
                  <li>Coupe</li>
                  <li>Station Wagon</li>
                  <li>Micro Car</li>
                  <li>Pickup</li>
                  <li>SUV</li>
                  <li>Convertible</li>
                </ul>

                <ul className="Categories-column">
                  <li>City Car</li>
                  <li>Vintage</li>
                  <li>Sports</li>
                  <li>Minivan</li>
                  <li>Sedan</li>
                  <li>MPV</li>
                  <li>Grand Tourer</li>
                </ul>
              </div>

              <p className="CATEGORIES">TAGS</p>
                
              <div className="TAGS-cont">


                <div className="TAGS-links">
                  <div className="TAGS-top-row">Affordable &nbsp; / &nbsp; Popular cars &nbsp; / &nbsp; Van </div>
                  <div className="TAGS-bottom-row">Sedan &nbsp; / &nbsp; Family Car &nbsp; / &nbsp; Vintage</div>
                </div>
              </div>
            </div>
          </div>


        <div className="Cards-flipping-cont">
         <ul className="Cards-flipping-list">
           <li><img src={ArrowLeft} alt="ArrowLeft"/></li>
           <li className="flipping-number">1</li>
           <li className="flipping-number">2</li>
           <li className="flipping-number">3</li>
           <li><img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="Arrow"/></li>
         </ul>
        </div>
        

        </div>
      </div>
    );
}
 
export default CarsCards;