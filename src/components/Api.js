export class Api {
  constructor({ baseUrl, headers }) {
    this.Url = baseUrl;
    this.headers = headers;
    this.authorization = headers.authorization;
    this.contentType = headers["Content-Type"];
    this.profileURL = `${baseUrl}/users/me`;
    this.imageUrl = `${this.Url}/cards`;
  }

  getInitialProfileData() {
    return fetch(this.profileURL, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  getInitialImages() {
    return fetch(this.imageUrl, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  sendProfileData({ name, profession }) {
    return fetch(this.profileURL, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: profession,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  addNewImage({ name, link }) {
    return fetch(this.imageUrl, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  deleteImage(cardID) {
    return fetch(`${this.imageUrl}/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  placeLike(cardID) {
    return fetch(`${this.imageUrl}/${cardID}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  removeLike(cardID) {
    return fetch(`${this.imageUrl}/${cardID}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  updateAvatar({ link }) {
    return fetch(`${this.profileURL}/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }
}
