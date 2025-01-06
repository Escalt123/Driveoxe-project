import './style.css';

import logo from './logo.svg';

const NavbarDetails = () => {
    return ( 
        <>
            <ul className="NavbarDetails-list">

                <li className="Logo-cont-Details">
                    <a href="/Home">
                        <img className="LogoDetails-img" src={logo} alt="logo"/>
                    </a>
                </li>

                <li className="NavDetails-center-element">
                    <a href="/#">Service</a>
                    <a href="/Cars">Cars</a>
                    <a href="/#">Pricing</a>
                    <a href="/About">About</a>
                </li>
                <li className="NavDetails-element">
                    <a href="/#" id="Contact-navDetails">Contact</a>
                    <button className="Sign-up-btn-Details">Sign up</button>
                </li>
            </ul>
        </>
     );
}
 
export default NavbarDetails;