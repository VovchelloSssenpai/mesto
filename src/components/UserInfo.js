export class UserInfo {
  constructor({ name, profession }) {
    this.nameElement = document.querySelector(name);
    this.professionElement = document.querySelector(profession);
  }

  getUserInfo() {
    const userData = {
      name: this.nameElement.textContent,
      profession: this.professionElement.textContent,
    };
    return userData;
  }

  setUserInfo({ name, profession }) {
    this.nameElement.textContent = name;
    this.professionElement.textContent = profession;
  }
}
