import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  popupOpen(name, link) {
    const popupImageImage = this.popupSelector.querySelector(
      ".popup-image__image"
    );
    const popupImageText =
      this.popupSelector.querySelector(".popup-image__text");

    popupImageImage.src = link;
    popupImageText.textContent = name;
    popupImageImage.alt = name;
    super.setEventListeners();
    super.popupOpen();
  }
}
