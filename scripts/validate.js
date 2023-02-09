const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
};

function disableSubmit(e) {
  e.preventDefault();
}

// function hasInvalidInput(inputList) {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// }

// function toggleButtonState(inputList, buttonElement, config) {
//   buttonElement.classList.toggle(
//     config.inactiveButtonClass,
//     hasInvalidInput(inputList)
//   );
//   buttonElement.disabled = hasInvalidInput(inputList);
// }

// function showInputError(formElement, inputElement, errorMessage, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.errorClass);
// }

// function hideInputError(formElement, inputElement, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.classList.remove(config.errorClass);
//   errorElement.textContent = "";
// }

// function isValid(formElement, inputElement, config) {
//   !inputElement.validity.valid
//     ? showInputError(
//         formElement,
//         inputElement,
//         inputElement.validationMessage,
//         config
//       )
//     : hideInputError(formElement, inputElement, config);
// }

// function enableFormValidation(formElement, config) {
//   formElement.addEventListener("submit", disableSubmit);
//   const inputList = Array.from(
//     formElement.querySelectorAll(config.inputSelector)
//   );
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   formElement.addEventListener("input", () => {});

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       isValid(formElement, inputElement, config);
//       toggleButtonState(inputList, buttonElement, config);
//     });
//   });

//   toggleButtonState(inputList, buttonElement, config);
// }

// function enableValidation(config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));

//   formList.forEach((formElement) => {
//     enableFormValidation(formElement, config);
//   });
// }

// enableValidation(formValidationConfig);

///////////////////////////////////////////////////////////////////////////////////////////////  SECOND VERSION (refactored)
function handleWrongInput(input, errorElement, config) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(formValidationConfig.errorClass);
}

function handleRightInput(input, errorElement, config) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(formValidationConfig.errorClass);
}

function toggleButton(formElement, config) {
  const buttonSubmit = formElement.querySelector(
    formValidationConfig.submitButtonSelector
  );
  const isformValid = formElement.checkValidity();

  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isformValid);
  buttonSubmit.disabled = !isformValid;
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const inputID = input.id;
  const errorElement = document.querySelector(`.${inputID}-error`);

  !input.validity.valid
    ? // input.classList.add(config.inputErrorClass);
      // errorElement.textContent = input.validationMessage;
      // errorElement.classList.add(formValidationConfig.errorClass);
      handleWrongInput(input, errorElement, config)
    : // input.classList.remove(config.inputErrorClass);
      // errorElement.textContent = "";
      // errorElement.classList.remove(formValidationConfig.errorClass);
      handleRightInput(input, errorElement, config);
}

function addInputListeners(formElement, config) {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      handleFormInput(evt, config);
    });
  });
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    addInputListeners(formElement, config);
    formElement.addEventListener("submit", disableSubmit);
    toggleButton(formElement, config);
    formElement.addEventListener("input", (e) => {
      toggleButton(formElement, config);
    });
  });
}

enableValidation(formValidationConfig);
