import React from "react";
import PropTypes from "prop-types";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeleteCardPopup({ card, isOpen, onClose, onDelete }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDelete(card);
  }

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      button="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

ConfirmDeleteCardPopup.propTypes = {
  card: PropTypes.shape({
    owner: PropTypes.shape({ _id: PropTypes.string.isRequired }).isRequired,
    likes: PropTypes.arrayOf(
      PropTypes.shape({ _id: PropTypes.string.isRequired })
    ).isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ConfirmDeleteCardPopup;
