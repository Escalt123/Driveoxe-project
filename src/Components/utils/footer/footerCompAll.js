import { Link } from 'react-router-dom';

import "./style.css";

export const FooterComp = () => {
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
                                        <Link to="/About">About us</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link to="/About">Who we are</Link>
                                    </li>

                                    <li className="Link-item">
                                        Contact Us{/* Нужна ссылка на контакты */}
                                    </li>
                                </ul>

                                <ul className="Link-column">
                                    <li className="Link-item">
                                        The Cars
                                    </li>

                                    <li className="Link-item">
                                        <Link>How it works </Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>Pick a car </Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>FAQs</Link>
                                    </li>
                                </ul>

                                <ul className="Link-column">
                                    <li className="Link-item">
                                        Social Media
                                    </li>

                                    <li className="Link-item">
                                        <Link>Facebook</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>Instagram</Link>
                                    </li>

                                    <li className="Link-item">
                                        <Link>Twitter</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="smallFooter-text">Copyright © 2023 GoCar. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComp;