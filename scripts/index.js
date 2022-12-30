// DOM Elements

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const profileUsername = document.querySelector(".profile__user-name");
const profileUserprofession = document.querySelector(
  ".profile__user-profession"
);
const popupNameInput = document.querySelector(".popup__item_el_name");
const popupProfessionInput = document.querySelector(
  ".popup__item_el_profession"
);
const popupSubmitButton = document.querySelector(".popup__submit-button");
const submitForm = document.querySelector(".popup__form");

// Functions

const popupClose = function () {
  popup.classList.remove("popup_opened");
};

const popupOpen = function () {
  popup.classList.add("popup_opened");
};

// Open, Close Popup
editButton.addEventListener("click", () => {
  popupOpen();
  popupNameInput.value = profileUsername.textContent;
  popupProfessionInput.value = profileUserprofession.textContent;
});

closeButton.addEventListener("click", popupClose);

// Editing form
const usernameEditing = function (evt) {
  evt.preventDefault();

  const newUserContent = popupNameInput.value;
  profileUsername.textContent = newUserContent;

  const newProfessionContent = popupProfessionInput.value;
  profileUserprofession.textContent = newProfessionContent;

  popupClose();
};

submitForm.addEventListener("submit", usernameEditing);
