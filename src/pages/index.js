import "../pages/index.css";

// DOM Elements

import {
  formValidationConfig,
  buttonEditProfile,
  profileFormSubmit,
  imageFormSubmit,
  profileAddButton,
  profileInfoTemplates,
} from "../utils/utils.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithDelete } from "../components/PopupWithDelete.js";
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
  api.sendProfileData(userInfo.getUserInfo());
});
formPopup.setEventListeners();

const imagePopup = new PopupWithForm(".popup_add", (imageObject) => {
  api.addNewImage(imageObject);
  imagePopup.popupClose();
});
imagePopup.setEventListeners();

const deletePopup = new PopupWithDelete(".popup_delete", (cardID, element) => {
  api
    .deleteImage(cardID)
    .then(card._handleDeleteCard(element), deletePopup.popupClose());
});
deletePopup.setEventListeners();
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
    },
    (cardID) => {
      deletePopup.popupOpen(cardID);
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
    renderer: (item) => {
      renderCard(item);
    },
  },
  ".elements__list"
);
defaultCardList.deleteElement();
// INITIALIZING API

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "fb85a167-fa0c-4b77-b6c4-6e80ca894d63",
    "Content-Type": "application/json",
  },
});

// Initial profile
api.setInitialProfileData(profileInfoTemplates);
// Initial images
const initialImages = api.getInitialImages();
initialImages.then((data) => {
  defaultCardList.renderItems(data);
});
