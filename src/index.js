import "./pages/index.css";

import { getCards, getUser, postCard } from "./scripts/api";
import { renderUser, renderCards } from "./scripts/render";
import { createCard } from "./scripts/card";
import { loader } from "./scripts/utils";

import {
  closePopup,
  openFormWithReset,
  openFormWithValues,
} from "./scripts/modal-open-close";

import { editProfile } from "./scripts/popup-edit-profile";
import { editAvatar } from "./scripts/popup-edit-avatar";

import { enableValidation } from "./scripts/validation";

const profileBlock = document.querySelector(".profile");
const profileElement = {
  name: profileBlock.querySelector(".profile__name"),
  description: profileBlock.querySelector(".profile__description"),
  avatar: profileBlock.querySelector(".profile__avatar-image"),
};
const profileEditElement = {
  button: document.querySelector(".profile__edit-button"),
  popup: document.querySelector(".popup_action_edit-profile"),
  form: document.forms["edit-profile"],
};
const avatarEditElement = {
  button: document.querySelector(".profile__avatar-button"),
  popup: document.querySelector(".popup_action_edit-avatar"),
  form: document.forms["edit-avatar"],
};
const imageAddElement = {
  button: document.querySelector(".profile__add-button"),
  popup: document.querySelector(".popup_action_add-image"),
  form: document.forms["add-image"],
};
// templates
const templateCard = document.querySelector(".template-element").content;
const templateSpace = document.querySelector(".elements");

// Init load
Promise.all([getUser(), getCards()])
  .then(([user, cards]) => {
    renderUser(user, profileElement);
    renderCards(cards, templateCard, templateSpace);
  })
  .catch((err) =>
    console.log("ошибка получения данных профиля и карточек с сервра", err)
  );

function addImage(form, template, space) {
  form.addEventListener("submit", (element) => {
    const obj = {
      name: form.title.value,
      link: form.link.value,
    };
    loader(form, "Сохранение...");
    postCard(obj)
      .then((card) => {
        addCard(card, template, space);
        closePopup(form.offsetParent);
        loader(form, "Сохранить");
        form.reset();
      })
      .catch((err) => {
        console.log("ошибка загрузки карточки на сервер", err);
        loader(form, "Сохранить");
      });
    element.preventDefault();
  });
}

function addCard(data, template, space) {
  const card = createCard({ data, template });
  space.prepend(card);
}
// open modals
openFormWithReset(imageAddElement);
openFormWithReset(avatarEditElement);
openFormWithValues(profileEditElement, profileElement);

editProfile(profileEditElement.form, profileElement);
editAvatar(avatarEditElement, profileElement);
addImage(imageAddElement.form, templateCard, templateSpace);

enableValidation({
  formSelector: ".popup__container", // form
  inputSelector: ".popup__input", // input
  submitButtonSelector: ".popup__submit-button", // button
  inactiveButtonClass: "popup__submit-button_disabled", // button-disabled
  inputErrorClass: "popup__input_type_error", // input error

  errorClass: "popup__field-error", // error-span-shown
});
