import HeaderCarsPage from '../header/HeaderCarsPage.js';
import CarsCards from '../cards/CarsCards.js';
import FooterCarsPage from '../footerCarsPage/FooterCarsPage.js';

const CarsPageComp = () => {
    return ( 
        <div>
            <HeaderCarsPage/>
            <CarsCards/>
            <FooterCarsPage/>
        </div>
     );
}
 
export default CarsPageComp;