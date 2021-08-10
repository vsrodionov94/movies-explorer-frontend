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

  getMoviesData() {
    return fetch(`${this._url}/`, {
      headers: this._headers,
      method: "GET",
    }).then(this._handleResponseData);
  }
}

const moviesApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-type": "application/json",
  },
});

export default moviesApi;
