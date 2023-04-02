export class Api {
  constructor({ baseUrl, headers }) {
    this.Url = baseUrl;
    this.headers = headers;
    this.authorization = headers.authorization;
    this.contentType = headers["Content-Type"];
    this.profileURL = `${baseUrl}/users/me`;
    this.imageUrl = `${this.Url}/cards`;
  }

  setInitialProfileData(templates) {
    fetch(this.profileURL, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .then((data) => {
        const avatarElement = document.querySelector(templates.avatar);
        avatarElement.src = data.avatar;

        const nameElement = document.querySelector(templates.name);
        nameElement.textContent = data.name;

        const aboutElement = document.querySelector(templates.about);
        aboutElement.textContent = data.about;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getInitialImages() {
    return fetch(this.imageUrl, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return res.json();
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
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
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteImage(cardID) {
    return fetch(`${this.imageUrl}/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getLikesInfo(cardID) {
    return fetch(`${this.imageUrl}/${cardID}/likes`, {
      method: "PUT",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  placeLike(cardID) {
    return fetch(`${this.imageUrl}/${cardID}/likes`, {
      method: "PUT",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeLike(cardID) {
    return fetch(`${this.imageUrl}/${cardID}/likes`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateAvatar({ link }) {
    return fetch(`${this.profileURL}/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// _ID eaeb282351385a0f6793a964
