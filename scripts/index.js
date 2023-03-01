// DOM Elements

const popupList = document.querySelectorAll(".popup");
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonsClosePopup = document.querySelectorAll(".popup__close-button");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const profileUserName = document.querySelector(".profile__user-name");
const profileUserProfession = document.querySelector(
  ".profile__user-profession"
);
const popupNameInput = document.querySelector(".popup__input_el_name");
const popupProfessionInput = document.querySelector(
  ".popup__input_el_profession"
);
const popupPictureNameInput = document.querySelector(
  ".popup__input_el_picture"
);
const popupPictureLinkInput = document.querySelector(".popup__input_el_link");
const profileFormSubmit = document.querySelector(".popup__form-profile");
const imageFormSubmit = document.querySelector(".popup__form-image");
const cardsContainer = document.querySelector(".elements__list");
const profileAddButton = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup-image");
const popupImageImage = document.querySelector(".popup-image__image");
const popupImageText = document.querySelector(".popup-image__text");
const elementsForm = document.querySelectorAll(".popup__form");
import { initialCards, formValidationConfig } from "../data/data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
/////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONs

// ESC close
const handleClosePopupByEsc = function (evt) {
  const popupOpened = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopup(popupOpened);
  }
};

// Overlay close
function handleClosePopupByOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

// open
function openPopup(modalWindow) {
  modalWindow.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopupByEsc);
}
// close
function closePopup(modalWindow) {
  modalWindow.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopupByEsc);
}

// zooming images
function handleZoomImage(cardData) {
  popupImageImage.src = cardData.link;
  popupImageText.textContent = cardData.name;
  popupImageImage.alt = cardData.name;
  openPopup(popupImage);
}

// open profile edit
function openProfileEdit() {
  openPopup(popupEdit);
  popupNameInput.value = profileUserName.textContent;
  popupProfessionInput.value = profileUserProfession.textContent;
}

// Render Card
function renderCard(cardData) {
  cardsContainer.prepend(cardData);
}

// Card adding handler
function handleAddingCard(cardData) {
  const card = new Card(cardData, document.querySelector("#card"));
  const cardElement = card.generateCard();

  cardElement
    .querySelector(".elements__image")
    .addEventListener("click", (e) => {
      handleZoomImage(cardData);
    });

  renderCard(cardElement);
}

// Adding Initial Cards
initialCards.forEach((cardData) => {
  handleAddingCard(cardData);
});

// saving new Cards
function handlePictureAdding() {
  const pictureNameNew = popupPictureNameInput.value;
  const linkValueNew = popupPictureLinkInput.value;
  const imageObject = {
    name: pictureNameNew,
    link: linkValueNew,
  };
  handleAddingCard(imageObject);
  closePopup(popupAdd);
  imageFormSubmit.reset();
  handleFormValidation(formValidationConfig, imageFormSubmit);
}

// EDITING FORM

function handleEditingUsername() {
  const userContentNew = popupNameInput.value;
  profileUserName.textContent = userContentNew;

  const professionContentNew = popupProfessionInput.value;
  profileUserProfession.textContent = professionContentNew;
  closePopup(popupEdit);
}

////////////////////////////////////////////////////////////////////////////////////////
// HANDLERS

// SUBMIT EDITING BUTTON
profileFormSubmit.addEventListener("submit", (e) => {
  handleEditingUsername();
  e.preventDefault();
});

//SUBMIT NEW IMAGE BUTTON
imageFormSubmit.addEventListener("submit", (e) => {
  handlePictureAdding();
  e.preventDefault();
});

// CLOSING BUTTON
buttonsClosePopup.forEach((buttonElement) => {
  buttonElement.addEventListener("click", (evt) => {
    closePopup(evt.target.closest(".popup"));
  });
});

// ADD BUTTON
profileAddButton.addEventListener("click", () => {
  openPopup(popupAdd);
});

// EDIT BUTTON
buttonEditProfile.addEventListener("click", (e) => {
  openProfileEdit(e);
});

// Overlay CLOSING
popupList.forEach((popupElement) => {
  popupElement.addEventListener("click", handleClosePopupByOverlay);
});

function handleFormValidation(formValidationConfig, formElement) {
  const newValidationForm = new FormValidator(
    formValidationConfig,
    formElement
  );

  return newValidationForm.enableValidation();
}

// Handle form validation
elementsForm.forEach((elementForm) => {
  handleFormValidation(formValidationConfig, elementForm);
});
