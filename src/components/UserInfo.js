export class UserInfo {
  constructor({ name, profession }) {
    this.nameElement = name;
    this.professionElement = profession;
  }

  getUserInfo() {
    const userData = {
      name: this.nameElement.textContent,
      profession: this.professionElement.textContent,
    };
    return userData;
  }

  setUserInfo({ nameInput, professionInput }) {
    this.nameElement.textContent = nameInput;
    this.professionElement.textContent = professionInput;
  }
}
