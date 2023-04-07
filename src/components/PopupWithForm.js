import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, submitFormHandler) {
    super(selector);
    this.submitFormHandler = submitFormHandler;
    this.popupForm = this.popup.querySelector(".popup__form");
    this.popupInputs = this.popupForm.querySelectorAll(".popup__input");
    this.submitButton = this.popupForm.querySelector(".popup__submit-button");
  }

  _getInputValues() {
    const inputData = {};
    this.popupInputs.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  _handleFormSubmit() {
    this.renderLoading(true);
    this.submitFormHandler(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
  }

  popupClose() {
    this.popupForm.reset();
    super.popupClose();
  }

  setInputValues(data) {
    this.popupInputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this.submitButton.textContent = "Сохранение...";
    } else {
      this.submitButton.textContent = "Сохранить";
    }
  }
}
