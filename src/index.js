import "./pages/index.css";

import { getCards, getUser, postCard } from "./scripts/api";
import { renderUser, renderCards } from "./scripts/render";
import { createCard } from "./scripts/card";
import { openPreview } from "./scripts/popup-open-preview";

import {
  closeElement,
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
// preview
const popupPreview = document.querySelector(".popup_action_preview");
// templates
const popupAddImageForm = document.forms["add-image"];
const templateCard = document.querySelector(".template-element").content;
const templateSpace = document.querySelector(".elements");
const templateObject = {};

// Init load
Promise.all([getUser(), getCards()]).then(([user, cards]) => {
  renderUser(user, profileElement);
  renderCards(cards, templateCard, templateSpace);
});

function addImage(form, object, template, space, modal) {
  form.addEventListener("submit", (element) => {
    object["name"] = form.title.value;
    object["link"] = form.link.value;
    postCard(object).then((card) => addCard(card, template, space, modal));
    closeElement(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

function addCard(data, template, space, modal) {
  const card = createCard({
    data,
    template
  });
  openPreview(card.querySelector(".element__image"), modal);

  space.prepend(card);
}
// open modals
openFormWithReset(imageAddElement);
openFormWithReset(avatarEditElement);
openFormWithValues(profileEditElement, profileElement);

editProfile(profileEditElement.form, profileElement);
editAvatar(avatarEditElement, profileElement);
// submit for add
addImage(
  popupAddImageForm,
  templateObject,
  templateCard,
  templateSpace,
  popupPreview
);

enableValidation({
  formSelector: ".popup__container", // form
  inputSelector: ".popup__input", // input
  submitButtonSelector: ".popup__submit-button", // button
  inactiveButtonClass: "popup__submit-button_disabled", // button-disabled
  inputErrorClass: "popup__input_type_error", // input error

  errorClass: "popup__field-error", // error-span-shown
});
