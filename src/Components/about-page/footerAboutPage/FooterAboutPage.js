import "./style.css";


const FooterAboutPage = () => {
    return (
      <div className="FooterAboutPage-holder">
        <div className="FooterAboutPage-cont">
          <div className="FooterAboutPage-black-car">
            <p>Reserve Your Dream Car Today and Feel Best Experience Travel</p>

            <button>Let’s Drive with Us</button>
          </div>

          <div>
            <div className="links-wrap">
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
                    <li className="Link-item">Quick Link</li>
                    <li className="Link-item">
                      <a href="./About">About us</a>
                    </li>

                    <li className="Link-item">
                    <a href="./About">Who we are</a>
                    </li>

                    <li className="Link-item">
                      <a href="./Home">Contact Us</a>
                    </li>
                  </ul>

                  <ul className="Link-column">
                    <li className="Link-item">The Cars</li>
                    <li className="Link-item">
                      <a href="./Home">How it works</a>
                    </li>

                    <li className="Link-item">
                      <a href="./Cars">Pick a car</a>
                    </li>

                    <li className="Link-item">
                      <a href="./FAQs">FAQs</a>
                    </li>
                  </ul>

                  <ul className="Link-column">
                    <li className="Link-item">Social Media</li>
                    <li className="Link-item">
                      <a href="./Home">Facebook</a>
                    </li>

                    <li className="Link-item">
                    <a href="./Home">Instagram</a>
                    </li>

                    <li className="Link-item">
                      <a href="./Home">Twitter</a>
                    </li>
                  </ul>

                </div>

                <div className="smallFooter-text">
                  Copyright © 2023 GoCar. All rights reserved.<button></button>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
    );
}
 
export default FooterAboutPage;