import HeaderCarsPage from '../header/HeaderCarsPage.js';
import CarsCards from '../cards/CarsCards.js';
import FooterComp from '../../utils/footer/footerCompAll.js';

const CarsPageComp = () => {
    return ( 
        <div>
            <HeaderCarsPage/>
            <CarsCards/>
            <FooterComp/>
        </div>
     );
}
 
export default CarsPageComp;