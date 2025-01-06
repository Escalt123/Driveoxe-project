import NavbarMain from './Components/homeMain-page/navbar/Navbar.js';
import NavbarDetails from './Components/car-details-pages/navbarDetails/NavbarDetails.js';

import AboutPageComp from './Components/about-page/about-page-comp/AboutPageComp.js';
import HomeMainPage from './Components/homeMain-page/homeMain-comp/HomeMainPage.js';
import CarsPageComp from './Components/cars-page/cars-page-comp/CarsPageComp.js';
import CarDetailsPagesComp from './Components/car-details-pages/CarDetailsPagesComp/CarDetailsPagesComp.js';
import FaqPageComp from './Components/faq-page/FaqPageComp/FaqPageComp.js';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <div className="bg-holder">
        <div className="App">

          <BrowserRouter>
            <Routes>
              <Route path="" element={<NavbarMain />} />
              <Route path="Home" element={<NavbarMain />} />
              <Route path="About" element={<NavbarMain />} />
              <Route path="Cars" element={<NavbarMain />} />
              <Route path="Details" element={<NavbarDetails />} />
              <Route path="FAQs" element={<NavbarMain />} />
            </Routes>
          </BrowserRouter>

          <BrowserRouter>
            <Routes>
              <Route path="" element={<HomeMainPage />} />
              <Route path="Home" element={<HomeMainPage />} />
              <Route path="About" element={<AboutPageComp />} />
              <Route path="Cars" element={<CarsPageComp />} />
              <Route path="Details" element={<CarDetailsPagesComp />} />
              <Route path="FAQs" element={<FaqPageComp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;