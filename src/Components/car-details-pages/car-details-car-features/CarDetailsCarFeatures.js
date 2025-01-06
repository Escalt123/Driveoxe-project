import "./style.css";

const CarDetailsCarFeatures = () => {
    return ( 
        <div className="CarDetailsCarFeatures-holder">
            <div className="CarDetailsCarFeatures-cont">
                <p className="CarDetailsCarFeatures-ContTitle">Car Features</p>

                <ul>
                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Convertible Top</p>
                        <div>Enjoy the open-air experience with an easy power-operated convertible top.</div>
                    </li>

                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Sport Mode</p>
                        <div>Unleash the full power of the V8 engine for an exhilarating ride.</div>
                    </li>

                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Infotainment System</p>
                        <div>Stay connected with a modern and flexible multimedia system.</div>
                    </li>

                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Advanced Safety</p>
                        <div>Benefit from modern safety features, including airbags and stability control.</div>
                    </li>

                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Leather Interior</p>
                        <div>Experience premium comfort with leather-trimmed seats and design.</div>
                    </li>

                    <li className="CarDetailsCarFeatures-Item">
                        <p className="CarDetailsCarFeatures-ItemTitle">Iconic Design</p>
                        <div>Turn heads with the timeless, bold styling of the Ford Mustang.</div>
                    </li>
                    
                </ul>

            </div>
        </div>
     );
}
 
export default CarDetailsCarFeatures;