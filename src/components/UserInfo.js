export class UserInfo {
  constructor({ name, profession }) {
    this.nameElement = document.querySelector(name);
    this.professionElement = document.querySelector(profession);

    this.popupNameInput = document.querySelector(".popup__input_el_name");
    this.popupProfessionInput = document.querySelector(
      ".popup__input_el_profession"
    );
  }

  getUserInfo() {
    this.popupNameInput.value = this.nameElement.textContent;
    this.popupProfessionInput.value = this.professionElement.textContent;
  }

  setUserInfo({ nameInput, professionInput }) {
    this.nameElement.textContent = nameInput;
    this.professionElement.textContent = professionInput;
  }
}
