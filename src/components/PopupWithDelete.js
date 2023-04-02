import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.submitButton = this.popup.querySelector(".popup__submit-button");
  }

  popupOpen(cardID, card) {
    super.popupOpen();
    this.cardID = cardID;
    this.card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this.handleCardDelete();
  }

  handleCardDelete() {
    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.submitFormHandler(this.cardID, this.card);
    });
  }
}
