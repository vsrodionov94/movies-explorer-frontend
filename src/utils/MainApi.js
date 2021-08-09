import React from "react";

class Api extends React.Component {
  constructor(config) {
    super(config);
    this._url = config.url;
    this._headers = config.headers;
  }

  

  _handleResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "GET",
    }).then(this._handleResponseData);
  }

  setUserData(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponseData);
  }

  getInitialMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      method: "GET",
    }).then(this._handleResponseData);
  }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleResponseData);
  }

  removeMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponseData);
  }

  setToken(token){
    this._headers.authorization = `Bearer ${token}`
  }
}

const api = new Api({
  url: "https://apivsrodionov.nomoredomains.club",
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
