// import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this.cardData = cardData;
    this.link = cardData.link;
    this.text = cardData.name;
    this.templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
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

    return this.element;
  }

  _setEventListeners() {
    this.elementLike = this.element.querySelector(".elements__like");
    this.elementDelete = this.element.querySelector(".element__delete");
    this.elementImage = this.element.querySelector(".elements__image");

    this.elementLike.addEventListener("click", (e) => {
      this._handlePlaceLike();
    });

    this.elementDelete.addEventListener("click", (e) => {
      this._handleDeleteCard();
    });

    this.elementImage.addEventListener("click", (e) => {
      this._handleCardClick();
    });
  }

  _handlePlaceLike() {
    this.elementLike.classList.toggle("elements__like_active");
  }

  _handleDeleteCard() {
    this.element.remove();
    this.elementa = null;
  }

  _handleCardClick() {
    this.handleCardClick(this.text, this.link);
  }
}

export { Card };
