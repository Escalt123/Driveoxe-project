import CarDetailsHeader from "../car-details-header/CarDetailsHeader.js";
import CarDetailsCarInfo from "../car-details-car-info/CarDetailsCarInfo.js";
import CarDetailsCarFeatures from "../car-details-car-features/CarDetailsCarFeatures.js";
import CarDetailsAlsoLike from "../car-details-also-like/CarDetailsAlsoLike.js";
import FooterComp from "../../utils/footer/footerCompAll.js";



const CarDetailsPagesComp = () => {
    return ( 
        <div>
            <CarDetailsHeader/>
            <CarDetailsCarInfo/>
            <CarDetailsCarFeatures/>
            <CarDetailsAlsoLike/>
            <FooterComp/>
        </div>
     );
}
 
export default CarDetailsPagesComp;