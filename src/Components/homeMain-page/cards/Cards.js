import React, { useState } from 'react';
import  { calculationNumberInPage, renderPageItems, nextButtonPagination, BackButtonPagination } from '../../utils/paginationAll.js';

import Card from "../card/Card.js";
import { cardStorage } from '../../../helpers/cardStorage.js';

import "./style.css";
import ArrowLeft from "./ArrowLeft.svg";

const Cards = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const countKeysCards = Object.keys(cardStorage)

  let countPagesNumber = calculationNumberInPage(countKeysCards, 6);

  return (
    <div className="cards-Holder">
      <div className="cards-cont">
        <div className="cards-all-title">
          <div className="cards-small-title">THE CARS</div>

          <div className="cards-big-title">Our Impressive Fleet</div>
        </div>

        <div className="card-cont">

          <ul className="cards-list">
            { renderPageItems(currentPage, countPagesNumber, Card) }
          </ul>

          <div className="page-btn-cont">
            <div className="page-btn-row">

              <button onClick={() => BackButtonPagination(currentPage, countPagesNumber.length, setCurrentPage)} className="page-btn ArrowLeftPagination pagination-btn">
                <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="ArrowLeft"/>
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
                <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="Arrow"/>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



export default Cards;