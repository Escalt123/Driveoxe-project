import React, { useState } from "react";
import Popup from "../../utils/Contact-Popup/PopupComp.js";

import "./style.css";
import logo from "./Drivoxe.svg";
import mailPopup from "./mailPopup.png";
import telephonPopup from "./telephonPopup.png";



const Navbar = () => {

    // isPopupOpen хранит либо true, либо false
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <ul className="Navbar-list">

                <li className="Logo-cont">
                    <a href="/Home">
                        <img className="Logo-img" src={logo} alt="logo"/>
                    </a>
                </li>

                <li className="Nav-center-element">
                    <a href="/#">Service</a>
                    <a href="/Cars">Cars</a>
                    <a href="/#">Pricing</a>
                    <a href="/About">About</a>
                </li>

                <li className="Nav-element">
                    <button onClick={() => setIsPopupOpen(true)} id="Contact-nav">Contact</button>

                    <Popup show={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                        <h3 className="title-Popup">For your Queries, We have our 24x7 customer service.</h3>

                        <h4 className="Phone-Popup-title">
                            <img className="Popup-Img" src={telephonPopup} alt="" />
                            Pick up the phone and call us on:
                        </h4>

                        <p className="Phone-number-Popup">
                            +91-44-4852 0072 <span>/</span> +91-9444 165 262
                        </p>
                        
                        
                        <h4 className="Email-Popup-title">
                            <img className="Popup-Img" src={mailPopup} alt="" />
                            Email us:
                        </h4>

                        <p className="Email-Popup-adress">
                            For Existing Client Queries : <br/>
                            <div className="Popup-Postal-adress">support@lorem.net </div>
                        </p>

                        <p className="Email-Popup-adress">
                            For Sales Queries : <br/>
                            <div className="Popup-Postal-adress">sales@lorem.net</div>
                        </p>
                    </Popup>

                    <button className="Sign-up-btn">Sign up</button>
                </li>

            </ul>
        </>
        
    )
}

export default Navbar;