import "../pages/index.css";

// DOM Elements

import {
  initialCards,
  formValidationConfig,
  buttonEditProfile,
  profileFormSubmit,
  imageFormSubmit,
  profileAddButton,
} from "../utils/utils.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
// INITIALIZING VALIDATION

const profileEditValidation = new FormValidator(
  formValidationConfig,
  profileFormSubmit
);
profileEditValidation.enableValidation();

const imageAddValidation = new FormValidator(
  formValidationConfig,
  imageFormSubmit
);
imageAddValidation.enableValidation();

// INITIALIZING USER INFO
const profileData = {
  name: ".profile__user-name",
  profession: ".profile__user-profession",
};
const userInfo = new UserInfo(profileData);

// INITIALIZING POPUP
const formPopup = new PopupWithForm(".popup_edit", (object) => {
  userInfo.setUserInfo(object);
  formPopup.popupClose();
});
formPopup.setEventListeners();

const imagePopup = new PopupWithForm(".popup_add", (imageObject) => {
  renderCard(imageObject);
  imagePopup.popupClose();
});
imagePopup.setEventListeners();
// /////////////////////////////////////////////////////////////////////////////////////////////
// // FUNCTIONs

// Render Card
function renderCard(cardData) {
  defaultCardList.addItem(createCard(cardData));
}

const popupWithImageClick = new PopupWithImage(".popup-image");
popupWithImageClick.setEventListeners();
// Card adding handler
function createCard(cardData) {
  const card = new Card(
    cardData,
    document.querySelector("#card"),
    (text, link) => {
      popupWithImageClick.popupOpen(text, link);
    }
  );
  const cardElement = card.generateCard();

  return cardElement;
}

// ////////////////////////////////////////////////////////////////////////////////////////
// // EVENT LISTENERS

// ADD BUTTON
profileAddButton.addEventListener("click", (e) => {
  imageAddValidation.resetValidation();
  imagePopup.popupOpen();
});

// EDIT BUTTON

buttonEditProfile.addEventListener("click", (e) => {
  formPopup.setInputValues(userInfo.getUserInfo());
  profileEditValidation.resetValidation();
  formPopup.popupOpen();
});

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      renderCard(item);
    },
  },
  ".elements__list"
);
defaultCardList.renderItems();
