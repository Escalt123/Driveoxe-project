import React, { useState, useMemo, useEffect } from 'react';
import { calculationNumberInPage, nextButtonPagination, BackButtonPagination } from '../../utils/paginationAll.js';
import { cardStorage } from '../../../helpers/cardStorage.js';

import './style.css';

import PopularCar from './PopularCarCard/PopularCar.js';
import ArrowDownImg from "./ArowDown.svg";
import FindImg from "./find.svg";
import ArrowLeft from "./ArrowLeft.svg";

const CarsCards = () => {
  const categoriesArray = [
    { categories: "Hatchback" },
    { categories: "Coupe" },
    { categories: "Station Wagon" },
    { categories: "Micro Car" },
    { categories: "Pickup" },
    { categories: "SUV" },
    { categories: "Convertible" },
    { categories: "City Car" },
    { categories: "Vintage" },
    { categories: "Sports" },
    { categories: "Minivan" },
    { categories: "Sedan" },
    { categories: "MPV" },
    { categories: "Grand Tourer" },
  ];

  const tagsArray = [
    { tags: "Affordable" },
    { tags: "Popular cars" },
    { tags: "Van" },
    { tags: "Sedan" },
    { tags: "Family Car" },
    { tags: "Vintage" },
  ];
  const [items] = useState(cardStorage);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  const categories = [...new Set(categoriesArray.map(item => item.categories))];
  const tags = [...new Set(tagsArray.map(item => item.tags))];

  // Берётся элемент(item) и проверются его "внутренности". 
  // Если, при сравнении с item, все константы равны true - элемент добавляется массив для рендера
  const filteredItems = useMemo(() => {

    const filtered = items.filter(item => {
      const tagsMatch = !selectedTag || (item.tag && item.tag === selectedTag);
      const categoryMatch = !selectedCategory || (item.categories && item.categories === selectedCategory);
      const searchMatch = !searchQuery ||
        (item.carName && item.carName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.carFirstLine && item.carFirstLine.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.carSecondLine && item.carSecondLine.toLowerCase().includes(searchQuery.toLowerCase()));

      return categoryMatch && tagsMatch && searchMatch;
    });

    // Сортировка по стоимости (сначала дешевле/сначало дороже)
    if (sortOrder !== 'none') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.carPrice.replace(/\$/g, '')); // Удаление символа "$" и преобразование значения в число
        const priceB = parseFloat(b.carPrice.replace(/\$/g, '')); // +

        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA; // 
      });
    }

    return filtered;
  }, [items, selectedCategory, selectedTag, searchQuery, sortOrder]);

  const cardRender = calculationNumberInPage(filteredItems, 9) || [];

  useEffect(() => {
    if (currentPage >= cardRender.length && cardRender.length > 0) {
      setCurrentPage(0);
    }
  }, [currentPage, cardRender.length]);

  //******************
  useEffect(() => {
    if (currentPage >= cardRender.length && cardRender.length > 0) {
      setCurrentPage(0);
    }
  }, [currentPage, cardRender.length]);

  const countPagesNumber = calculationNumberInPage(filteredItems, 9);

  return (
    <div className="CarsCards-holder">
      <div className="CarsCards-cont">
        <div className="CarsCards-topRow">
          <div className="CarsCards-ShowingResults">
            {/* Showing {startItem}–{endItem} of {totalItems} results */}
          </div>

          <div className="CarsCards-Dropdown">
            <p className="CarsCards-Dropdown-text">Default Sorting</p>
            <div className="dropdown-content">
              {/* При клике проверяется чему равен sortOrder, если 'asc', то клик изменит состояние sortOrder на 'none'. Если sortOrder равен 'desk' или 'none', то клик изменит sortOrder на 'asc'. */}
              <p
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'none' : 'asc')}
              >
                Cheap cars first</p>

              {/* При клике проверяется чему равен sortOrder, если 'desc', то клик изменит состояние sortOrder на 'none'. Если sortOrder равен 'asc' или 'none', то клик изменит sortOrder на 'desc'. */}
              <p
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'none' : 'desc')}
              >
                Expensive cars first</p>
            </div>
            <img src={ArrowDownImg} className="DropdownArrow" alt="arrow" />
          </div>

          <div className="CarsCards-Searching">
            <input
              className="CarsCards-Searching-input"
              placeholder="Search Your Pick Car...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={FindImg} alt="FindImg" />
          </div>

        </div>

        <div className="CarsCards-catalog-cont">

          <ul className="cards-list card-list-cars-page">

            {cardRender.length > 0 && Array.isArray(cardRender[currentPage])  // Проверяет есть ли хотя бы 1 элемент в массиве. Если его нет - рендерит 'No items match your filters.'.
              ? (
                cardRender[currentPage].map((car) => (
                  <li key={car.id} className="card-item">
                    <img src={car.carImage} alt="card" />
                    <div className="card-title">{car.carName}</div>
                    <div className="card-price">
                      <div>
                        <div className="small-text">Starting at</div>
                        <div className="price-per-day">{car.carPrice}/day</div>
                      </div>
                      <button className="rent-btn">Rent</button>
                    </div>
                  </li>
                ))
              ) : (
                <p className="No-results">No items match your filters.</p> // Текст если карточки, при выбранным категориям/тегам отсутствуют. 
              )}

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

            <div
              onClick={() => setSelectedCategory('')}
              className={`Reset-Categories ${!selectedCategory ? 'active-reset' : ''}`}
            >
              Reset categories
            </div>

            <div className="CarsCards-tags-categories-cont">
              <ul className="Categories-column">

                <div className="CarsCards-tags-categories-cont">
                  <ul className="Categories-column">
                    {categories.map((category, index) => (
                      <li
                        key={`category-${index}`}
                        onClick={() => handleCategoryClick(category)}
                        className={`Categories-column-btn ${category === selectedCategory ? 'active-category' : ''
                          }`}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

              </ul>
            </div>

            <p className="TAGS">TAGS</p>

            <div
              onClick={() => setSelectedTag('')}
              className={`Reset-Tags ${!selectedTag ? 'active-reset' : ''}`}>
              Reset tag
            </div>

            <div className="TAGS-cont">
              <ul className="TAGS-links">
                {tags.map((tag, index) => (
                  <li
                    key={`tag-${index}`}
                    onClick={() => handleTagClick(tag)}
                    className={`TAGS-btn ${tag === selectedTag ? 'active-tag' : ''
                      }`}
                  >
                    {tag}
                    <span>
                      {index < tags.length - 1 && " / "} {'\u00A0'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="Cards-flipping-cont">
          <button
            onClick={() => BackButtonPagination(currentPage, countPagesNumber.length, setCurrentPage)}
            className="page-btn ArrowLeftPagination pagination-btn"
            disabled={currentPage === 0}
          >
            <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="ArrowLeft" />
          </button>

          {countPagesNumber.map((_, index) => (
            <button
              key={index}
              className={`page-btn ${index === currentPage ? 'activePagination' : ''}`}
              onClick={() => setCurrentPage(index)}
            >
              0{index + 1}
            </button>
          ))}

          <button
            onClick={() => nextButtonPagination(currentPage, countPagesNumber.length, setCurrentPage)}
            className="page-btn pagination-btn"
            disabled={currentPage === countPagesNumber.length - 1}
          >
            <img className="Cards-flipping-ArrowRight" src={ArrowLeft} alt="Arrow" />
          </button>
        </div>
        
        <div className="FooterCarsPage-holder">
          <div className="FooterCarsPage-cont">

            <div className="FooterCarsPage-BackOpac">
              <div className="Driver-photo-cont">
                <div className="Driver-photo-small-title">
                  FIND YOUR PERFECT RIDE
                </div>

                <div className="Driver-photo-big-title">
                  Explore Our Fleet and Book <br /> Your Dream Car Today!
                </div>

                <div className="btn-footer-cont">
                  <button className="btn-footer">Let’s Drive with Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CarsCards;