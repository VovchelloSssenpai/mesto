// DOM Elements

const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const popupList = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const profileUsername = document.querySelector(".profile__user-name");
const profileUserprofession = document.querySelector(
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
const submitFormProfile = document.querySelector(".popup__form-profile");
const submitFormImage = document.querySelector(".popup__form-image");
const list = document.querySelector(".elements__list");
const addButton = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup-image");
const popupImageImage = document.querySelector(".popup-image__image");
const listItemTemplate = document.querySelector("#card").content;
const popupImageText = document.querySelector(".popup-image__text");
const pictureForm = document.getElementById("add-form");
import { initialCards } from "../modules/cards.js";

/////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONs

// ESC close
function popupEscClose(evt) {
  if (evt.key === "Escape") {
    popupList.forEach(popupClose);
  }
}

// open
function popupOpen(modalWindow) {
  modalWindow.classList.add("popup_opened");
  document.addEventListener("keydown", popupEscClose);
}
// close
function popupClose(modalWindow) {
  modalWindow.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupEscClose);
}

// like
function placeLike(e) {
  e.target.classList.toggle("elements__like_active");
}
// delete
function deleteCard(e) {
  e.target.closest(".elements__list-item").remove();
}
// zooming images
function zoomImage(el) {
  popupImageImage.src = el.link;
  popupImageText.textContent = el.name;
  popupOpen(popupImage);
}

// open profile edit
function openProfileEdit(e) {
  popupOpen(popupEdit);
  popupNameInput.value = profileUsername.textContent;
  popupProfessionInput.value = profileUserprofession.textContent;
}
// IMAGE CREATION FUNCTION

function makeImage(element) {
  const listElement = listItemTemplate
    .querySelector(".elements__list-item")
    .cloneNode(true);
  const listImage = listElement.querySelector(".elements__image");
  const listText = listElement.querySelector(".elements__text");
  listImage.src = element.link;
  listText.textContent = element.name;

  // LIKES IN ADDED CARDS
  listElement
    .querySelector(".elements__like")
    .addEventListener("click", placeLike);

  // DELETE
  listElement
    .querySelector(".element__delete")
    .addEventListener("click", deleteCard);

  //  ZOOMING OPENED IMAGES
  listElement
    .querySelector(".elements__image")
    .addEventListener("click", () => {
      zoomImage(element);
    });

  return listElement;
}

// Render Card
function renderCard(element) {
  list.prepend(makeImage(element));
}

// Adding Initial Images
initialCards.forEach((element) => {
  renderCard(element);
});

// saving new images
function handlePictureAdding() {
  const newPictureName = popupPictureNameInput.value;
  const newLinkValue = popupPictureLinkInput.value;
  const imageObject = {
    name: newPictureName,
    link: newLinkValue,
  };
  renderCard(imageObject);
  popupClose(popupAdd);
}

// EDITING FORM

function usernameEditing() {
  const newUserContent = popupNameInput.value;
  profileUsername.textContent = newUserContent;

  const newProfessionContent = popupProfessionInput.value;
  profileUserprofession.textContent = newProfessionContent;
  popupClose(popupEdit);
}

////////////////////////////////////////////////////////////////////////////////////////
// HANDLERS

// SUBMIT EDITING BUTTON
submitFormProfile.addEventListener("submit", usernameEditing);

//SUBMIT NEW IMAGE BUTTON
submitFormImage.addEventListener("submit", handlePictureAdding);

// CLOSING BUTTON
closeButtons.forEach((el) => {
  el.addEventListener("click", (evt) => {
    popupClose(evt.target.closest(".popup"));
  });
});

// // ESC closing

// document.addEventListener("keydown", popupEscClose);

// Overlay CLOSING

document.addEventListener("click", (e) => {
  popupClose(e.srcElement);
});

// ADD BUTTON
addButton.addEventListener("click", (e) => {
  popupOpen(popupAdd);
});

// EDIT BUTTON
editButton.addEventListener("click", (e) => {
  openProfileEdit(e), enableValidation(formValidationConfig);
});
