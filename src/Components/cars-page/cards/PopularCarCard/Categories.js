import React, { useState, useEffect  } from 'react';
import { cardStorage } from '../../../../helpers/cardStorage.js';
import { SortByTag, SortByCategory, calculationNumberInPage, renderPageItems, nextButtonPagination, BackButtonPagination } from '../../../utils/paginationAll.js';

const CategoriesComp = () => {
    return ( 
        <div className="CarsCards-tags-categories-cont">
            {/* <ul className="Categories-column">
                {categoriesTest.map((item, index) => {

                    const categoryExists = isCategoryInStorage(item.categories);

                    return (
                        <li key={index}>
                            <button
                                className="Categories-column-btn"
                                disabled={!categoryExists}
                            >
                                {item.categories}
                                {!categoryExists && " (No cars)"}
                            </button>
                        </li>
                    );

                })}
            </ul> */}
        </div>
    );
}
 
export default CategoriesComp;