import { Popup } from "./Popup.js";

export class PopupWithDelete extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.submitButton = this.popup.querySelector(".popup__submit-button");
  }

  popupOpen(cardID, element) {
    super.popupOpen();
    this.cardID = cardID;
    this.element = element;
  }

  setEventListeners() {
    super.setEventListeners();
    this.handleCardDelete();
  }

  handleCardDelete() {
    this.submitButton.addEventListener("click", (e) => {
      console.log(this.cardID);
      e.preventDefault();
      this.submitFormHandler(this.cardID, this.element);
    });
  }
}
