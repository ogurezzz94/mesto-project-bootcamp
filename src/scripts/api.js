import { checkResponse } from "./utils";

const headersParameters = {
  authorization: "31a2d760-4fa3-4c8c-9e34-6dea3045973e",
  "Content-Type": "application/json",
};
const baseUrl = "https://nomoreparties.co/v1/wbf-cohort-8";

function api(uri, method, data) {
  if (!data) {
    return fetch(baseUrl + uri, {
      method: method.toUpperCase(),
      headers: headersParameters,
    }).then((res) => checkResponse(res));
  } else {
    return fetch(baseUrl + uri, {
      method: method.toUpperCase(),
      headers: headersParameters,
      body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
  }
}

function apiPatchProfile(uri, data) {
  return fetch(baseUrl + uri, {
    method: "PATCH",
    headers: headersParameters,
    body: JSON.stringify({
      name: data.name,
      about: data.description,
    }),
  }).then((res) => checkResponse(res));
}

function apiPatchAvatar(uri, data) {
  return fetch(baseUrl + uri, {
    method: "PATCH",
    headers: headersParameters,
    body: JSON.stringify({
      avatar: data,
    }),
  }).then((res) => checkResponse(res));
}

export function getCards() {
  return api("/cards", "get");
}

export function getUser() {
  return api("/users/me", "get");
}

export function postCard(card) {
  return api("/cards", "post", card);
}

export function deleteCard(id) {
  return api(`/cards/${id}`, "delete");
}

export function patchProfile(data) {
  return apiPatchProfile("/users/me", data);
}

export function patchAvatar(data) {
  return apiPatchAvatar("/users/me/avatar", data);
}

export function putLike(id) {
  return api(`/cards/likes/${id}`, "put");
}

export function removeLike(id) {
  return api(`/cards/likes/${id}`, "delete");
}
