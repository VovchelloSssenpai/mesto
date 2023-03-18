import "../pages/index.css";

// DOM Elements

import {
  initialCards,
  formValidationConfig,
  buttonEditProfile,
  popupEdit,
  popupAdd,
  profileUserName,
  profileUserProfession,
  popupNameInput,
  popupProfessionInput,
  profileFormSubmit,
  imageFormSubmit,
  cardsContainer,
  profileAddButton,
  popupImage,
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
  name: profileUserName,
  profession: profileUserProfession,
};
const userInfo = new UserInfo(profileData);

// INITIALIZING POPUP
const formPopup = new PopupWithForm(popupEdit, (object) => {
  userInfo.setUserInfo(object);
  formPopup.popupClose();
  profileEditValidation.resetValidation();
});
formPopup.setEventListeners();

const imagePopup = new PopupWithForm(popupAdd, (imageObject) => {
  renderCard(imageObject);
  imagePopup.popupClose();
  imageAddValidation.resetValidation();
});
imagePopup.setEventListeners();
// /////////////////////////////////////////////////////////////////////////////////////////////
// // FUNCTIONs

// Render Card
function renderCard(cardData) {
  defaultCardList.addItem(createCard(cardData));
}

// Card adding handler
function createCard(cardData) {
  const card = new Card(
    cardData,
    document.querySelector("#card"),
    (text, link) => {
      const PopupWithImageClick = new PopupWithImage(popupImage);
      PopupWithImageClick.popupOpen(text, link);
    }
  );
  const cardElement = card.generateCard();

  return cardElement;
}

// // EDITING FORM

function handleEditingUsername(evt) {
  evt.preventDefault();
  const userContentNew = popupNameInput.value;
  profileUserName.textContent = userContentNew;

  const professionContentNew = popupProfessionInput.value;
  profileUserProfession.textContent = professionContentNew;
  closePopup(popupEdit);
}

// ////////////////////////////////////////////////////////////////////////////////////////
// // HANDLERS

// ADD BUTTON
profileAddButton.addEventListener("click", (e) => {
  imagePopup.popupOpen();
});

// EDIT BUTTON
buttonEditProfile.addEventListener("click", (e) => {
  formPopup.popupOpen();
  // userInfo.setUserInfo(userInfo.getUserInfo());
});

const defaultCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        document.querySelector("#card"),
        (text, link) => {
          const PopupWithImageClick = new PopupWithImage(popupImage);
          PopupWithImageClick.popupOpen(text, link);
        }
      );
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
    },
  },
  cardsContainer
);
defaultCardList.renderItems();
