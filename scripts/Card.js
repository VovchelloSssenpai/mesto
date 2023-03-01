class Card {
  constructor(cardData, templateSelector) {
    this.cardData = cardData;
    this.link = cardData.link;
    this.text = cardData.name;
    this.templateSelector = templateSelector;
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку
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

    elementImage;
  }

  _handlePlaceLike(elementLike) {
    elementLike.classList.toggle("elements__like_active");
  }

  _handleDeleteCard(cardElement) {
    cardElement.remove();
  }
}

export { Card };
