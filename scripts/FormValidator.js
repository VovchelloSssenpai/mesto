class FormValidator {
  constructor(formValidationConfig, formElement) {
    this.formValidationConfig = formValidationConfig;
    this.formElement = formElement;
  }

  _handleWrongInput(input, errorElement, config) {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this.formValidationConfig.errorClass);
  }

  _handleRightInput(input, errorElement, config) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.formValidationConfig.errorClass);
  }

  _toggleButton(formElement, formValidationConfig) {
    const buttonSubmit = formElement.querySelector(
      formValidationConfig.submitButtonSelector
    );
    const formValidity = formElement.checkValidity();

    buttonSubmit.classList.toggle(
      formValidationConfig.inactiveButtonClass,
      !formValidity
    );
    buttonSubmit.disabled = !formValidity;
  }

  _handleFormInput(evt, config) {
    const input = evt.target;
    const inputID = input.id;
    const elementError = document.querySelector(`.${inputID}-error`);

    !input.validity.valid
      ? this._handleWrongInput(input, elementError, config)
      : this._handleRightInput(input, elementError, config);
  }

  enableValidation() {
    this._toggleButton(this.formElement, this.formValidationConfig);
    this.formElement.addEventListener("input", (e) => {
      e.preventDefault();
      this._toggleButton(this.formElement, this.formValidationConfig);
      this._handleFormInput(e, this.formValidationConfig);
    });

    return this.formElement;
  }
}

export { FormValidator };
