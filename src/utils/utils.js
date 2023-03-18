export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
};

export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const popupEdit = document.querySelector(".popup_edit");
export const popupAdd = document.querySelector(".popup_add");
export const profileUserName = document.querySelector(".profile__user-name");
export const profileUserProfession = document.querySelector(
  ".profile__user-profession"
);
export const popupNameInput = document.querySelector(".popup__input_el_name");
export const popupProfessionInput = document.querySelector(
  ".popup__input_el_profession"
);
export const profileFormSubmit = document.querySelector(".popup__form-profile");
export const imageFormSubmit = document.querySelector(".popup__form-image");
export const cardsContainer = document.querySelector(".elements__list");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupImage = document.querySelector(".popup-image");
