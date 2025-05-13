import AboutHeader from '../header/AboutHeader.js';
import PickTheCar from '../pickTheCar/PickTheCar.js';
import WhyChooseDrivoxeAboutPage from '../whyChooseDrivoxe/WhyChooseDrivoxe.js';
import HowItWorksAboutPage from '../howItWorks/HowItWorksAboutPage.js';
import Achievements from '../achievements/Achievements.js';
import FooterComp from '../../utils/footer/footerCompAll.js';

const AboutPageComp = () => {
    return ( 
        <div>
            <AboutHeader/>
            <PickTheCar/>
            <WhyChooseDrivoxeAboutPage/>
            <HowItWorksAboutPage/>
            <Achievements/>
            <FooterComp/>
        </div>
     );
}
 
export default AboutPageComp;