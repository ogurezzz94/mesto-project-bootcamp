const headersParameters = {
  authorization: "31a2d760-4fa3-4c8c-9e34-6dea3045973e",
  "Content-Type": "application/json",
};

const configCards = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-8/cards",
  headers: headersParameters,
};

const configUser = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-8/users/me",
  headers: headersParameters,
};

function getCards(config, fn) {
  return fetch(config.baseUrl, {
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`${res.stauts}`);
    })
    .then((result) => fn(result))
    .catch((err) => console.log(err));
}

function getUser(config) {
  return fetch(config.baseUrl, {
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`${res.stauts}`);
    })
    .then((result) => {
      console.log(result)
    })
    .catch((err) => console.log(err));
}

export { configCards, configUser, getCards, getUser };
