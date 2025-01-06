import AboutHeader from '../header/AboutHeader.js';
import PickTheCar from '../pickTheCar/PickTheCar.js';
import WhyChooseDrivoxeAboutPage from '../whyChooseDrivoxe/WhyChooseDrivoxe.js';
import HowItWorksAboutPage from '../howItWorks/HowItWorksAboutPage.js';
import Achievements from '../achievements/Achievements.js';
import FooterAboutPage from '../footerAboutPage/FooterAboutPage.js';

const AboutPageComp = () => {
    return ( 
        <div>
            <AboutHeader/>
            <PickTheCar/>
            <WhyChooseDrivoxeAboutPage/>
            <HowItWorksAboutPage/>
            <Achievements/>
            <FooterAboutPage/>
        </div>
     );
}
 
export default AboutPageComp;