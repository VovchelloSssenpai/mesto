export class Popup {
  constructor(selector) {
    this.selector = selector;
    this.popup = document.querySelector(this.selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    
  }

  popupOpen() {
    this.popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  popupClose() {
    this.popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.popupClose();
    }
  }

  // Close by Button
  _handleCloseButtonClose() {
    const buttonsClosePopup = this.popup.querySelector(".popup__close-button");
    buttonsClosePopup.addEventListener("click", () => {
      this.popupClose();
    });
  }

  // Close by overlay
  _handleOverlayClose() {
    this.popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.popupClose();
      }
    });
  }

  setEventListeners() {
    this._handleCloseButtonClose();
    this._handleOverlayClose();
  }
}
