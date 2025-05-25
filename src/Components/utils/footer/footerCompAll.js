import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../Contact-Popup/PopupComp';

import { scrollToTop } from "../scrollAll";

import "./style.css";

import telephonPopup from "./telephonPopup.png";
import mailPopup from "./mailPopup.png";

export const FooterComp = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <div className="footer-wrap">
                <div className="footer-cont">

                    <div className="links-wrap-test">

                        <div className="subscribe-cont">
                            <div className="subscribe-title">Don’t Miss a Thing</div>
                            <div className="subscribe-desc">
                                Subscribe to our newsletter for exclusive deals and updates.
                            </div>
                            <input
                                className="email-input"
                                type="email"
                                placeholder="Enter email address for newsletter ..."
                            />
                        </div>

                        <div className="links-list">

                            <div className="links-cont">
                                <ul className="Link-column">
                                    <li className="Link-item">
                                        Quick Link
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/About">About us+</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/About">Who we are+</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link onClick={() => setIsPopupOpen(true)}>Contact Us+</Link>
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
                                                For Existing Client Queries : <br />
                                                <div className="Popup-Postal-adress">support@lorem.net </div>
                                            </p>

                                            <p className="Email-Popup-adress">
                                                For Sales Queries : <br />
                                                <div className="Popup-Postal-adress">sales@lorem.net</div>
                                            </p>
                                        </Popup>
                                    </li>
                                </ul>

                                <ul className="Link-column">
                                    <li className="Link-item">
                                        The Cars
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/Home">How it works+</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/Cars">Pick a car+</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/FAQs">FAQs+</Link>
                                    </li>
                                </ul>

                                <ul className="Link-column">
                                    <li className="Link-item">
                                        Social Media
                                    </li>

                                    <li className="Link-item">
                                        <Link>Facebook-</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>Instagram-</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>Twitter-</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="smallFooter-text">Copyright © 2023 GoCar. All rights reserved.</div>
                        </div>
                    </div>

                    <div className="scrollTop-cont">
                        <button className="scrollTop-btn" onClick={() => scrollToTop()}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComp;