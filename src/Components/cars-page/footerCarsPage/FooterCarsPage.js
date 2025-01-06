import "./style.css";

const FooterCarsPage = () => {
  return (
    <div className="FooterCarsPage-holder">
      <div className="FooterCarsPage-cont">

        <div className="FooterCarsPage-BackOpac">
          <div className="Driver-photo-cont">
            <div className="Driver-photo-small-title">
              FIND YOUR PERFECT RIDE
            </div>

            <div className="Driver-photo-big-title">
              Explore Our Fleet and Book <br /> Your Dream Car Today!
            </div>

            <div className="btn-footer-cont">
              <button className="btn-footer">Let’s Drive with Us</button>
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
 
export default FooterCarsPage;