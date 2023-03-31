// import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(cardData, templateSelector, handleCardClick, handlePopupOpen) {
    this.cardData = cardData;
    this.link = cardData.link;
    this.text = cardData.name;
    this.templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.handlePopupOpen = handlePopupOpen;
  }

  _getTemplate() {
    const cardElement = this.templateSelector.content
      .querySelector(".elements__list-item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this.element = this._getTemplate();
    this._setEventListeners();
    const listImage = this.element.querySelector(".elements__image");
    const listText = this.element.querySelector(".elements__text");
    listImage.src = this.link;
    listText.textContent = this.text;
    listImage.alt = this.text;
    this._setLikeNumbers();
    this._ifpictureOwn();
    return this.element;
  }

  _setLikeNumbers() {
    const likeNumber = this.element.querySelector(".elements__like-number");
    if (this.cardData.likes) {
      likeNumber.textContent = this.cardData.likes.length;
    }
  }

  _setEventListeners() {
    this.elementLike = this.element.querySelector(".elements__like");
    this.elementDelete = this.element.querySelector(".element__delete");
    this.elementImage = this.element.querySelector(".elements__image");

    this.elementLike.addEventListener("click", (e) => {
      this._handlePlaceLike();
    });

    this.elementDelete.addEventListener("click", (e) => {
      this._handleBasketClick();
    });

    this.elementImage.addEventListener("click", (e) => {
      this._handleCardClick();
    });
  }

  _handlePlaceLike() {
    this.elementLike.classList.toggle("elements__like_active");
  }

  _handleBasketClick() {
    this.handlePopupOpen(this.cardData._id, this.element);
  }

  _ifpictureOwn() {
    if (this.cardData.owner._id === "eaeb282351385a0f6793a964") {
    } else {
      this.elementDelete.remove();
    }
  }

  _handleDeleteCard() {
    this.element.remove();
    this.element = null;
  }

  _handleCardClick() {
    this.handleCardClick(this.text, this.link);
  }
}

// мой ID eaeb282351385a0f6793a964

export { Card };
