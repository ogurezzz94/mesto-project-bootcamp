const headersParameters = {
  authorization: "31a2d760-4fa3-4c8c-9e34-6dea3045973e",
  "Content-Type": "application/json",
};
const baseUrl = "https://nomoreparties.co/v1/wbf-cohort-8";

function apiGet(uri) {
  return fetch(baseUrl + uri, {
    method: "GET",
    headers: headersParameters,
  }).then((res) => res.json());
}

function apiPost(uri, body) {
  return fetch(baseUrl + uri, {
    method: "POST",
    headers: headersParameters,
    body: JSON.stringify(body),
  });
}

function apiDelete(uri) {
  return fetch(baseUrl + uri, {
    method: "DELETE",
    headers: headersParameters,
  });
}

function apiEditProfile(uri, data) {
  return fetch(baseUrl + uri, {
    method: "PATCH",
    headers: headersParameters,
    body: JSON.stringify({
      name: data.name,
      about: data.description,
    }),
  });
}

function apiEditAvatar(uri, data) {
  return fetch(baseUrl + uri, {
    method: "PATCH",
    headers: headersParameters,
    body: JSON.stringify({
      avatar: data,
    }),
  });
}

function apiPutLike(uri, body) {
  return fetch(baseUrl + uri, {
    method: "PUT",
    headers: headersParameters,
    body: JSON.stringify(body),
  });
}

function apiRemoveLike(uri) {
  return fetch(baseUrl + uri, {
    method: "DELETE",
    headers: headersParameters,
  });
}

export function getCards() {
  return apiGet("/cards");
}

export function getUser() {
  return apiGet("/users/me");
}

export function postCard(card) {
  return apiPost("/cards", card);
}

export function deleteCard(id) {
  return apiDelete(`/cards/${id}`);
}

export function patchProfile(data) {
  return apiEditProfile("/users/me", data);
}

export function patchAvatar(data) {
  return apiEditAvatar("/users/me/avatar", data);
}

export function putLike(id) {
  return apiPutLike(`/cards/likes/${id}`);
}

export function removeLike(id) {
  return apiRemoveLike(`/cards/likes/${id}`);
}
