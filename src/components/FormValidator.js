class FormValidator {
  constructor(params, formElement) {
    this.params = params;
    this.inputErrorClass = params.inputErrorClass;
    this.inputSelector = params.inputSelector;
    this.buttonElement = params.submitButtonSelector;
    this.formElement = formElement;
    this.inputElementsArray = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
    this.buttonSubmitElement = this.formElement.querySelector(
      this.buttonElement
    );
  }

  _handleWrongInput(input, errorElement) {
    input.classList.add(this.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this.params.errorClass);
  }

  _handleRightInput(input, errorElement) {
    input.classList.remove(this.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.params.errorClass);
  }

  _toggleButton() {
    const formValidity = this.formElement.checkValidity();
    this.buttonSubmitElement.classList.toggle(
      this.params.inactiveButtonClass,
      !formValidity
    );
    this.buttonSubmitElement.disabled = !formValidity;
  }

  _handleFormInput(inputElement) {
    const elementError = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );

    !inputElement.validity.valid
      ? this._handleWrongInput(inputElement, elementError)
      : this._handleRightInput(inputElement, elementError);
  }

  resetValidation() {
    this.inputElementsArray.forEach((inputElement) => {
      const errorElement = this.formElement.querySelector(
        `.${inputElement.id}-error`
      );
      this._handleRightInput(inputElement, errorElement);
    });
    this._toggleButton();
  }

  enableValidation() {
    this._toggleButton();
    this.inputElementsArray.forEach((element) => {
      element.addEventListener("input", (e) => {
        this._toggleButton();
        this._handleFormInput(element);
      });
    });

    return this.formElement;
  }
}

export { FormValidator };
