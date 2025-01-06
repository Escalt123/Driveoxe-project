import "./style.css";

import closePopup from "./closePopup.png";

// в onClose передаётся функция, которая позволяет закрывать попап
const Popup = ({ show, onClose, children }) => {
  if (!show) return null; // Если show=false, попап не рендерится

  return (
      <div className="popup-overlay" onClick={onClose}>

        {/* Конструкция onClick={(e) => e.stopPropagation()} как бы "изолирует" элемент, 
        останавливая дальнейшее распространение события на его родительские элементы.
        
        Клик, который происходит на элементе с классом popup-content, не доходит 
        до родительского элемента popup-overlay из-за вызова e.stopPropagation().*/}

        <div className="popup-content" onClick={(e) => e.stopPropagation()}>

          <button className="close-Popup-btn" onClick={onClose}>
            <img className="close-Popup-btn-img" src={closePopup} alt="" />
          </button>

          {children}
        </div>
      

      </div>
  );
};

export default Popup;