const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-active",
};

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
  const formValidity = formElement.checkValidity();

  buttonSubmit.classList.toggle(config.inactiveButtonClass, !formValidity);
  buttonSubmit.disabled = !formValidity;
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const inputID = input.id;
  const elementError = document.querySelector(`.${inputID}-error`);

  !input.validity.valid
    ? handleWrongInput(input, elementError, config)
    : handleRightInput(input, elementError, config);
}

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    toggleButton(formElement, config);
    formElement.addEventListener("input", (e) => {
      console.log(e);
      e.preventDefault();
      toggleButton(formElement, config);
      handleFormInput(e, config);
    });
  });
}

enableValidation(formValidationConfig);
