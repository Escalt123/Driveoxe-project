import "./style.css";

const FaqFooter = () => {
    return ( 
        <div className="FaqFooter-hold">
            <div className="FaqFooter-cont">

                <div className="FaqFooter-BackgroundCar">
                    <div className="FaqFooter-Title-cont">
                        <p className="FaqFooter-BigTitle">
                            Still Have Questions?
                        </p>

                        <p className="FaqFooter-SmallTitle">
                            CONTACT US FOR ASSISTANCE
                        </p>

                        <button className="FaqFooter-btn">Contact Us</button>
                    </div>
                </div>

                {/* ---- Интегрировано из about-page*/}
                <div className="links-wrap">

                    <div className="subscribe-cont">
                    <div className="subscribe-title">Don’t Miss a Thing</div>
                    <div className="subscribe-desc">Subscribe to our newsletter for exclusive deals and updates.</div>
                    <input className="email-input" type="email" placeholder="Enter email address for newsletter ..."/>
                    </div>

                    <div className="links-list">
                        <div className="links-cont">
                            <ul className="Link-column">
                                <li className="Link-item">Quick Link</li>
                                <li className="Link-item">About us</li>
                                <li className="Link-item">Who we are</li>
                                <li className="Link-item">Contact Us</li>
                            </ul>

                            <ul className="Link-column">
                                <li className="Link-item">The Cars</li>
                                <li className="Link-item">How it works</li>
                                <li className="Link-item">Pick a car</li>
                                <li className="Link-item">FAQs</li>
                            </ul>

                            <ul className="Link-column">
                                <li className="Link-item">Social Media</li>
                                <li className="Link-item">Facebook</li>
                                <li className="Link-item">Instagram</li>
                                <li className="Link-item">Twitter</li>
                            </ul>
                        </div>

                        <div className="smallFooter-text">
                            Copyright © 2023 GoCar. All rights reserved.<button></button>
                        </div>
                    </div>
                </div>
                {/* ---- */}

            </div>
        </div>
     );
}
 
export default FaqFooter;