export class UserInfo {
  constructor({ name, profession, avatar }) {
    this.nameElement = document.querySelector(name);
    this.professionElement = document.querySelector(profession);
    this.avatarElement = document.querySelector(avatar);
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

  setInitialProfilenfo(data) {
    this.avatarElement.src = data.avatar;
    this.nameElement.textContent = data.name;
    this.professionElement.textContent = data.about;
  }

  setUserAvatar({ link }) {
    const userAvatar = document.querySelector(".profile__avatar");
    userAvatar.src = link;
  }
}
