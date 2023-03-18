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
    const elementLike = this.element.querySelector(".elements__like");
    const elementDelete = this.element.querySelector(".element__delete");
    const elementImage = this.element.querySelector(".elements__image");

    elementLike.addEventListener("click", (e) => {
      this._handlePlaceLike(elementLike);
    });

    elementDelete.addEventListener("click", (e) => {
      this._handleDeleteCard(this.element);
    });

    elementImage.addEventListener("click", (e) => {
      this._handleCardClick();
    });
  }

  _handlePlaceLike(elementLike) {
    elementLike.classList.toggle("elements__like_active");
  }

  _handleDeleteCard(cardElement) {
    cardElement.remove();
  }

  _handleCardClick() {
    this.handleCardClick(this.text, this.link, this.element);
  }
}

export { Card };
