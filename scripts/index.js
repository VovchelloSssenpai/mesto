// DOM Elements

const editButton = document.querySelector(".profile__edit-button");
const closeButtons = document.querySelectorAll(".popup__close-button");
const popups = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const profileUsername = document.querySelector(".profile__user-name");
const profileUserprofession = document.querySelector(
  ".profile__user-profession"
);
const popupNameInput = document.querySelector(".popup__item_el_name");
const popupProfessionInput = document.querySelector(
  ".popup__item_el_profession"
);
const popupPictureNameInput = document.querySelector(".popup__item_el_picture");
const popupPictureLinkInput = document.querySelector(".popup__item_el_link");
const popupSubmitButton = document.querySelector(".popup__submit-button");
const popupSubmitProfileButton = document.querySelector(
  ".popup__submit-button_profile"
);
const popupSubmitImageButton = document.querySelector(
  ".popup__submit-button_image"
);
const submitFormProfile = document.querySelector(".popup__form-profile");
const submitFormImage = document.querySelector(".popup__form-image");
const list = document.querySelector(".elements__list");
const addButton = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup-image");
const popupImageImage = document.querySelector(".popup-image__image");
let popupImageText = document.querySelector(".popup-image__text");

// Card template
const listItemTemplate = document.querySelector("#card").content;

// Data

const initialCards = [
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
///////////////////////////////////////////////////////////////////////////////
// Functions
// Adding Images

function addCardElement(data) {
  initialCards.forEach(function (element, index, array) {
    const listElement = listItemTemplate
      .querySelector(".elements__list-item")
      .cloneNode(true);
    const listImage = listElement.querySelector(".elements__image");
    const listText = listElement.querySelector(".elements__text");

    listImage.src = element.link;
    listText.textContent = element.name;
    list.append(listElement);
  });
}
addCardElement(initialCards);

// ZOOMING IMAGES

const zoomImage = (e) => {
  if (popupImage.classList.contains("popup_opened")) {
    popupImage.classList.remove("popup_opened");
  } else {
    popupImage.classList.add("popup_opened");
  }
  const clickedImage = e.target.src;
  const clickedImageName = e.target.offsetParent.innerText;
  popupImageImage.src = clickedImage;
  popupImageText.textContent = clickedImageName;
};

///////////////////////////////////////////////////////////////////////////////

// Like button
let likeButtons = Array.from(document.getElementsByClassName("elements__like"));

const checkLikeButtons = () => {
  likeButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
      const btn = e.target;
      btn.classList.contains("elements__like_active")
        ? btn.classList.remove("elements__like_active")
        : btn.classList.add("elements__like_active");
    });
  });
};
checkLikeButtons();
///////////////////////////////////////////////////////////////////////////////

// Open, Close Popup

const popupOpen = (e) => {
  e.target.classList.value === "profile__edit-button"
    ? popupEdit.classList.add("popup_opened")
    : popupAdd.classList.add("popup_opened");
};

const popupClose = () => {
  popups.forEach(function (el) {
    el.classList.remove("popup_opened");
  });
};

closeButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.offsetParent.offsetParent.classList.remove("popup_opened");
  });
});

addButton.addEventListener("click", (e) => {
  popupOpen(e);
});

editButton.addEventListener("click", (e) => {
  popupOpen(e);
  popupNameInput.value = profileUsername.textContent;
  popupProfessionInput.value = profileUserprofession.textContent;
});

///////////////////////////////////////////////////////////////////////////////
// Editing form

const usernameEditing = (evt) => {
  evt.preventDefault();

  const newUserContent = popupNameInput.value;
  profileUsername.textContent = newUserContent;

  const newProfessionContent = popupProfessionInput.value;
  profileUserprofession.textContent = newProfessionContent;

  popupClose();
};

submitFormProfile.addEventListener("submit", usernameEditing);

///////////////////////////////////////////////////////////////////////////////
// SAVING FORM and functionality of saved pic

const pictureAdding = (evt) => {
  evt.preventDefault();

  const newPictureName = popupPictureNameInput.value;
  const newLinkValue = popupPictureLinkInput.value;
  const listElement = listItemTemplate
    .querySelector(".elements__list-item")
    .cloneNode(true);
  const listImage = listElement.querySelector(".elements__image");
  const listText = listElement.querySelector(".elements__text");
  listElement.querySelector(".elements__like");
  listImage.src = newLinkValue;
  listText.textContent = newPictureName;

  ///////////////////////////////////////////////////////////////////////////////
  // LIKES IN ADDED CARDS

  listElement
    .querySelector(".elements__like")
    .addEventListener("click", (e) => {
      const result = e.target.classList.toggle("elements__like_active");
      result
        ? e.target.classList.add("elements__like_active")
        : e.target.classList.remove("elements__like_active");
    });

  list.prepend(listElement);
  popupClose();

  listElement
    .querySelector(".element__delete")
    .addEventListener("click", (e) => {
      e.target.offsetParent.remove();
    });

  //  ZOOMING OPENED IMAGES

  listElement
    .querySelector(".elements__image")
    .addEventListener("click", (e) => {
      zoomImage(e);
    });
};

submitFormImage.addEventListener("submit", pictureAdding);

///////////////////////////////////////////////////////////////////////////////
// DELETING CARD

let deleteButtons = document.querySelectorAll(".element__delete");

deleteButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.offsetParent.remove();
  });
});

// ZOOMING IMAGES

const image = document.querySelectorAll(".elements__image");

console.log();
image.forEach((el) => {
  el.addEventListener("click", zoomImage);
});
