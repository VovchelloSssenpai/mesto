// import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(
    cardData,
    templateSelector,
    { handleCardClick, handlePopupOpen, handlePlaceLike }
  ) {
    this.cardData = cardData;
    this.link = cardData.link;
    this.text = cardData.name;
    this.templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.handlePopupOpen = handlePopupOpen;
    this.handlePlaceLike = handlePlaceLike;
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
    this._setInitialLikes();
    this._ifpictureOwn();
    // this.ifLikePlacedAddColor();
    return this.element;
  }

  _setLikeNumbers() {
    this.likeNumber = this.element.querySelector(".elements__like-number");
    if (this.cardData.likes) {
      this.likeNumber.textContent = this.cardData.likes.length;
    }
  }

  _setInitialLikes() {
    if (this.ifLikePlaced()) {
      this.liked();
    } else {
      this.disliked();
    }
  }

  setLikeNumbers(likeamount) {
    this.likeNumber.textContent = likeamount;
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
    this.handlePlaceLike(this.cardData._id);
    // this.ifLikePlaced();
    // if (this.ifLikePlaced()) {
    //   this.handleRemoveLike(this.cardData._id);
    //   this.elementLike.classList.remove("elements__like_active");
    // } else {
    //   this.handlePlaceLike(this.cardData._id);
    //   this.elementLike.classList.add("elements__like_active");
    // }
    // this.handlePlaceLike(this.cardData._id);
    this.elementLike.classList.toggle("elements__like_active");
    // console.log(this.cardData.likes);
  }

  liked() {
    this.elementLike.classList.add("elements__like_active");
  }
  disliked() {
    this.elementLike.classList.remove("elements__like_active");
  }

  ifLikePlaced() {
    // console.log(this.cardData.likes[0]._id);
    return this.cardData.likes.some((item) => {
      return item._id === "eaeb282351385a0f6793a964";
    });
  }

  _handleBasketClick() {
    this.handlePopupOpen(this.cardData._id);
  }

  _ifpictureOwn() {
    if (this.cardData.owner._id === "eaeb282351385a0f6793a964") {
    } else {
      this.elementDelete.remove();
    }
  }

  // ifLikePlacedAddColor() {
  //   if (this.ifLikePlaced()) {
  //     this.elementLike.classList.add("elements__like_active");
  //   } else {
  //     this.elementLike.classList.remove("elements__like_active");
  //   }
  // }

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

// OLD

// setLikeNumbers() {
//   const likeNumber = this.element.querySelector(".elements__like-number");
//   if (this.cardData.likes) {
//     likeNumber.textContent = this.cardData.likes.length;
//   }
// }
