import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this.popupImageImage = this.popup.querySelector(".popup-image__image");
    this.popupImageText = this.popup.querySelector(".popup-image__text");
  }

  popupOpen(name, link) {
    this.popupImageImage.src = link;
    this.popupImageText.textContent = name;
    this.popupImageImage.alt = name;
    super.setEventListeners();
    super.popupOpen();
  }
}
