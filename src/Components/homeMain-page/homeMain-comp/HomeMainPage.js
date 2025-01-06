import Header from '../header/Header.js';
import LogosUnderHeader from '../logosUnderHeader/LogosUnderHeader.js';
import Cards from '../cards/Cards.js';
import WhyChoose from '../whyChoose/WhyChoose.js';
import WhatCustomersSay from '../whatCustomersSay/WhatCustomersSay.js';
import HovItWorks from '../hovItWorks/HovItWorks.js';
import Footer from '../footer/Footer.js';

const HomeMainPage = () => {
    return ( 
        <div>
            <Header/>
            <LogosUnderHeader/>
            <Cards/>
            <WhyChoose/>
            <WhatCustomersSay/>
            <HovItWorks/>
            <Footer/>
        </div>
     );
}
 
export default HomeMainPage;