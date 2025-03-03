import React, { useState, useEffect  } from 'react';

import { SortByTag, SortByCategory, calculationNumberInPage, renderPageItems, nextButtonPagination, BackButtonPagination } from '../../utils/paginationAll.js';

import { cardStorage } from '../../../helpers/cardStorage.js';

import './style.css';

import Card from '../../homeMain-page/card/Card';
import PopularCar from './PopularCarCard/PopularCar';

import ArrowDownImg from "./ArowDown.svg";
import FindImg from "./find.svg";
import ArrowLeft from "./ArrowLeft.svg";


const CarsCards = () => {



  const [currentCategories, setCurrentCategories] = useState(null);
  const [currentTag, setCurrentTag] = useState(null); 

  let sortedKeysCard = Object.keys(cardStorage);

  const handleCategoryClick = (category) => {
    setCurrentCategories(category);
    setCurrentTag(null);
  };

  const handleTagClick = (tag) => {
    setCurrentTag(tag);
    setCurrentCategories(null);
  };

  if (currentCategories !== null) {
    sortedKeysCard = SortByCategory(cardStorage, currentCategories);
  } 
    else if (currentTag !== null) {
      sortedKeysCard = SortByTag(cardStorage, currentTag);
  } 

  const [currentPage, setCurrentPage] = useState(0);


  let countPagesNumber = calculationNumberInPage(sortedKeysCard, 9);

  return (
    <div className="CarsCards-holder">
      <div className="CarsCards-cont">
        <div className="CarsCards-topRow">
          <div className="CarsCards-ShowingResults">
            Showing 1–9 of 24 results
          </div>

          <div className="CarsCards-Sorting">
            <div className="CarsCards-Sorting-text">Default Sorting</div>

            <img src={ArrowDownImg} alt="ArrowDownImg" />
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
            { renderPageItems(currentPage, countPagesNumber, Card) }
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
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("Hatchback")}>Hatchback</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("Coupe")}>Coupe</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("Station Wagon")}>Station Wagon</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Micro Car</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Pickup</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>SUV</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Convertible</button></li>
              </ul>

              <ul className="Categories-column">
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>City Car</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Vintage</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Sports</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Minivan</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("Coupe")}>Sedan</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>MPV</button></li>
                <li><button className="Categories-column-btn" onClick={() => handleCategoryClick("NotAvailable")}>Grand Tourer</button></li>
              </ul>
            </div>

            <p className="CATEGORIES">TAGS</p>

            <div className="TAGS-cont">


              <div className="TAGS-links">
                <div className="TAGS-top-row"><button className="TAGS-btn" onClick={() => handleTagClick("Affordable")}>Affordable</button> &nbsp; / &nbsp; <button className="TAGS-btn" onClick={() => handleTagClick("Sedan")}>Popular cars</button> &nbsp; / &nbsp; <button className="TAGS-btn" onClick={() => handleTagClick("NotAvailable")}>Van</button></div>
                <div className="TAGS-bottom-row"><button className="TAGS-btn" onClick={() => handleTagClick("Sedan")}>Sedan</button> &nbsp; / &nbsp; <button className="TAGS-btn" onClick={() => handleTagClick("Family Car")}>Family Car</button> &nbsp; / &nbsp; <button className="TAGS-btn" onClick={() => handleTagClick("NotAvailable")}>Vintage</button></div>
              </div>
            </div>
          </div>
        </div>


        <div className="Cards-flipping-cont">
          <button onClick={() => BackButtonPagination(currentPage, countPagesNumber.length, setCurrentPage)} className="page-btn ArrowLeftPagination pagination-btn">
            <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="ArrowLeft" />
          </button>

          {
            countPagesNumber.map((_, index) => (
              <button key={index}
                className={`page-btn ${index === currentPage ? 'activePagination' : ''}`} // className тоже обновялется при обновлении состояния currentPage и идёт проверка условия
                onClick={() => setCurrentPage(index)} // callback-функция обновления состояния срабатывает при клике на кнопку, и передаёт в currentPage index этой кнопки
              >
                0{index + 1}
              </button>
            ))
          }

          <button onClick={() => nextButtonPagination(currentPage, countPagesNumber.length, setCurrentPage)} className="page-btn pagination-btn">
            <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="Arrow" />
          </button>
        </div>


      </div>
    </div>
  );
}

export default CarsCards;