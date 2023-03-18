export class Popup {
  constructor(selector) {
    this.popupSelector = selector;
  }

  popupOpen() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }
  popupClose() {
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (e) => {
      this._handleEscClose(e);
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.popupClose();
    }
  }

  // Close by Button
  _handleCloseButtonClose() {
    // const buttonsClosePopup = document.querySelectorAll(".popup__close-button");
    // buttonsClosePopup.forEach((buttonElement) => {
    //   buttonElement.addEventListener("click", (evt) => {
    //     this.popupClose(evt.target.closest(".popup"));
    //   });
    // });
    const buttonsClosePopup = this.popupSelector.querySelector(
      ".popup__close-button"
    );
    buttonsClosePopup.addEventListener("click", (evt) => {
      this.popupClose(evt.target.closest(".popup"));
    });
  }

  // Close by overlay
  _handleOverlayClose() {
    this.popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        this.popupClose(evt.target);
      }
    });
  }

  setEventListeners() {
    this._handleCloseButtonClose();
    this._handleOverlayClose();
  }
}
