export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
};
export const profileData = {
  name: ".profile__user-name",
  profession: ".profile__user-profession",
  avatar: ".profile__avatar",
};
export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const profileFormSubmit = document.querySelector(".popup__form-profile");
export const imageFormSubmit = document.querySelector(".popup__form-image");
export const avatarFormSubmit = document.querySelector(".popup__form-avatar");
export const profileAddButton = document.querySelector(".profile__add-button");
export const buttonDeleteCard = document.querySelector(".element__delete");
export const avatarWrap = document.querySelector(".profile__avatar-wrap");
