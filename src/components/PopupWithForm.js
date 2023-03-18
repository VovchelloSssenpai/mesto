import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.popupForm = this.popupSelector.querySelector(".popup__form");
    this.popupInputs = this.popupForm.querySelectorAll(".popup__input");
    this.SubmitButton = this.popupForm.querySelector(".popup__submit-button");
  }

  _getInputValues() {
    const inputData = {};
    this.popupInputs.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  _handleFormSubmit(e) {
    this.SubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.submitFormHandler(this._getInputValues());
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._handleFormSubmit();
  }

  popupClose() {
    this.popupForm.reset();
    super.popupClose();
  }
}
