import React from "react";

function InfoTooltip(props) {
    const { isOpen, onClose, image, message } = props;
    return (
    <section className={`popup popup-info ${isOpen && 'popup_opened'}`}>
      <form className="popup__container">
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
        />
        <img className="popup-info__image" alt="картинка результата входа" src={image}></img>
        <h3 className="popup-info__title">{message}</h3>
      </form>
    </section>
    )
}

export default InfoTooltip;
