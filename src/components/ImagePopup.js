import React from "react";
import PropTypes from "prop-types";

function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup-photo ${card && "popup_opened"}`}>
      <div className="popup-photo__container">
        <img
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
          className="popup-photo__place"
        />
        <p className="popup-photo__title">{card ? card.name : ""}</p>
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
        />
      </div>
    </section>
  );
}

ImagePopup.propTypes = {
  card: PropTypes.shape({
    owner: PropTypes.shape({ _id: PropTypes.string.isRequired }).isRequired,
    likes: PropTypes.arrayOf(
      PropTypes.shape({ _id: PropTypes.string.isRequired })
    ).isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;
