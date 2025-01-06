import "./style.css";

const CarDetailsFooter = () => {
    return ( 
        <div className="CarDetailsFooter-holder">
            <div className="CarDetailsFooter-cont">
                <div className="CarDetailsFooter-BgCar">
                    <div className="FooterCarsPage-BackOpac">
                        <div className="CarDetailsFooter-title">
                            <p>Book Your Adventure Today and Feel the Power of the Open Road.</p>
                        </div>

                        <div className="CarDetailsFooter-btn">
                            <button >Let’s Drive with Us</button>
                        </div>

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
 
export default CarDetailsFooter;