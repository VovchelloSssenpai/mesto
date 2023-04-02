import "../pages/index.css";

import {
  formValidationConfig,
  buttonEditProfile,
  profileFormSubmit,
  imageFormSubmit,
  profileAddButton,
  profileInfoTemplates,
  buttonEditAvatar,
  avatarFormSubmit,
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

const avatarEditValidation = new FormValidator(
  formValidationConfig,
  avatarFormSubmit
);
avatarEditValidation.enableValidation();

// INITIALIZING USER INFO
const profileData = {
  name: ".profile__user-name",
  profession: ".profile__user-profession",
};
const userInfo = new UserInfo(profileData);

// INITIALIZING POPUP
const formPopup = new PopupWithForm(".popup_edit", (object) => {
  userInfo.setUserInfo(object);

  api.sendProfileData(userInfo.getUserInfo()).finally((res) => {
    formPopup.renderLoading(false);
  });
  formPopup.popupClose();
});
formPopup.setEventListeners();

const imagePopup = new PopupWithForm(".popup_add", (imageObject) => {
  api
    .addNewImage(imageObject)
    .then((res) => {
      renderCard(res);
    })
    .finally((res) => {
      formPopup.renderLoading(false);
    });

  imagePopup.popupClose();
});
imagePopup.setEventListeners();

const avatarPopup = new PopupWithForm(".popup_avatar", (link) => {
  api.updateAvatar(link).then((res) => {
    userInfo.setUserAvatar(link);
    avatarPopup.popupClose();
  });
});
avatarPopup.setEventListeners();

const deletePopup = new PopupWithDelete(".popup_delete", (cardID, card) => {
  api.deleteImage(cardID).then((res) => {
    card._handleDeleteCard();
    deletePopup.popupClose();
  });
});
deletePopup.setEventListeners();

// Render Card
function renderCard(cardData) {
  defaultCardList.addItem(createCard(cardData));
}

const popupWithImageClick = new PopupWithImage(".popup-image");
popupWithImageClick.setEventListeners();
// Card adding handler
function createCard(cardData) {
  const card = new Card(cardData, document.querySelector("#card"), {
    handleCardClick: (text, link) => {
      popupWithImageClick.popupOpen(text, link);
    },
    handlePopupOpen: (cardID) => {
      deletePopup.popupOpen(cardID, card);
    },
    handlePlaceLike: (cardID) => {
      if (!card.ifLikePlaced()) {
        api.placeLike(cardID).then((res) => {
          card.setLikeNumbers(res.likes.length);
          card.liked();
          card.cardData.likes = res.likes;
        });
      } else {
        api.removeLike(cardID).then((res) => {
          card.setLikeNumbers(res.likes.length);
          card.disliked();
          card.cardData.likes = res.likes;
        });
      }
    },
  });
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

buttonEditAvatar.addEventListener("click", (e) => {
  avatarPopup.popupOpen();
});

const defaultCardList = new Section(
  {
    renderer: (item) => {
      renderCard(item);
    },
  },
  ".elements__list"
);

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
