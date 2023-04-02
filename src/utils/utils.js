export const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
};
export const profileInfoTemplates = {
  avatar: ".profile__avatar",
  name: ".profile__user-name",
  about: ".profile__user-profession",
};
export const buttonEditProfile = document.querySelector(
  ".profile__edit-button"
);
export const profileFormSubmit = document.querySelector(".popup__form-profile");
export const imageFormSubmit = document.querySelector(".popup__form-image");
export const avatarFormSubmit = document.querySelector(".popup__form-avatar");
export const profileAddButton = document.querySelector(".profile__add-button");
export const buttonDeleteCard = document.querySelector(".element__delete");
export const buttonEditAvatar = document.querySelector(
  ".profile__avatar-edit-button"
);
