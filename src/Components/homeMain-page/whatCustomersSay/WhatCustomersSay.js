import React, { useState } from 'react';

/// объект конфигурации бд


/// объект конфигурации бд

import peopleImg from "./people.png";
import people2Img from "./people2.png";
import people3Img from "./people3.png";

import "./style.css";

const WhatCustomersSay = () => {





    const imagesSlide = [peopleImg, people2Img, people3Img]
    const customersText = [
        ' "My Drivoxe experience was nothing short of incredible. The pristine car and impeccable service made my trip unforgettable. I\'ll be back for more." ',
        ' "Sit sodales interdum leo, luctus molestie sapien et nulla urna dolor amet, luctus cras cras arcu sodales dapibus eget dui luctus eleifend dictumst. Qu" ',
        ' "Luctus nisi eget cras dictumst. Amet, nulla mattis vel risus nulla urna dolor non est. Habitasse nunc mauris leo, urna malesuada mauris fauc"',
    ]
    const cutomersName = [
        'Aleea Thompson',
        'Sam Fisher',
        'Alice Black',
    ]


    const [currentIndexSlide, setCurrentIndexSlide] = useState(0)

    const nextSlide = () => {
        setCurrentIndexSlide(
            (prevIndex) => (prevIndex + 1) % imagesSlide.length
        );
    };

    const prevSlide = () => {
        setCurrentIndexSlide(
            (prevIndex) => (prevIndex - 1 + imagesSlide.length) % imagesSlide.length
        );
    };

    return (
        <div className="whatCustomersSay-cont">
            <button className="left-slide-btn" onClick={prevSlide}></button>

            <div className="whatCustomersSay-desc-cont">
                <div className="whatCustomersSay-title">
                    WHAT OUR CUSTOMERS SAY
                    <div className="slider">
                        
                        
                    </div>                    
                </div>

                <div className="whatCustomersSay-text">
                    {customersText[currentIndexSlide]}
                </div>

                <div className="whatCustomersSay-people">
                    <img className='imgSlide' src={imagesSlide[currentIndexSlide]} alt={`Slide ${currentIndexSlide + 1}`} />

                    <div className="people-name-text">
                        {cutomersName[currentIndexSlide]}
                    </div>

                </div>
            </div>

            <button className="right-slide-btn" onClick={nextSlide}></button>
        </div>
    )
}

export default WhatCustomersSay;