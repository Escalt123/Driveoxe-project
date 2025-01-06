import CarDetailsHeader from "../car-details-header/CarDetailsHeader.js";
import CarDetailsCarInfo from "../car-details-car-info/CarDetailsCarInfo.js";
import CarDetailsCarFeatures from "../car-details-car-features/CarDetailsCarFeatures.js";
import CarDetailsAlsoLike from "../car-details-also-like/CarDetailsAlsoLike.js";
import CarDetailsFooter from "../car-details-footer/CarDetailsFooter.js";




const CarDetailsPagesComp = () => {
    return ( 
        <div>
            <CarDetailsHeader/>
            <CarDetailsCarInfo/>
            <CarDetailsCarFeatures/>
            <CarDetailsAlsoLike/>
            <CarDetailsFooter/>
        </div>
     );
}
 
export default CarDetailsPagesComp;