import "./pages/index.css";

import {
  configCards,
  configUser,
  getCards,
  getUser,
  postCard,
} from "./scripts/api";
import { renderUser, renderCards, createCard } from "./scripts/render";

import { closeModalWindow, stopProp, closePopup } from "./scripts/close-modal";

import { editProfile } from "./scripts/edit-popup";
import { editAvatar } from "./scripts/avatar-modal";
import { openFormWithReset, openFormWithValues } from "./scripts/open-modal";
import { enableValidation } from "./scripts/validation";

import { openPreview } from "./scripts/preview-popup";
import { toggleLikeButton } from "./scripts/like-card-button";
import { removeCardButton } from "./scripts/remove-card-button";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_action_edit-profile");
const profileEditForm = document.forms["edit-profile"];

const profileEditElement = {
  button: document.querySelector(".profile__edit-button"),
  popup: document.querySelector(".popup_action_edit-profile"),
  form: document.forms["edit-profile"],
};

const profileBlock = document.querySelector(".profile");
const profileElement = {
  name: profileBlock.querySelector(".profile__name"),
  description: profileBlock.querySelector(".profile__description"),
  avatar: profileBlock.querySelector(".profile__avatar-image"),
};

const imageAddButton = document.querySelector(".profile__add-button");
const imageAddPopup = document.querySelector(".popup_action_add-image");
const imageAddForm = document.forms["add-image"];

const imageAddElement = {
  button: document.querySelector(".profile__add-button"),
  popup: document.querySelector(".popup_action_add-image"),
  form: document.forms["add-image"],
};

// modals which should be closed
const popups = document.querySelectorAll(".popup");
// elements which close modals
const closePopupElements = document.querySelectorAll(
  ".popup, .popup__close-button"
);
// elements which should have prop stopped
const modalWindows = document.querySelectorAll(
  ".popup__container, .popup__figure"
);
// preview
const popupPreview = document.querySelector(".popup_action_preview");
// templates
const popupAddImageForm = document.forms["add-image"];
const templateCard = document.querySelector(".template-element").content;
const templateSpace = document.querySelector(".elements");
const templateObject = {};

const editAvatarButton = document.querySelector(".profile__avatar-button");
const editAvatarPopup = document.querySelector(".popup_action_edit-avatar");
const profileAvatarForm = document.forms["edit-avatar"];

const editAvatarElement = {
  button: document.querySelector(".profile__avatar-button"),
  popup: document.querySelector(".popup_action_edit-avatar"),
  form: document.forms["edit-avatar"],
}

openFormWithReset( editAvatarElement.button, editAvatarElement.popup, editAvatarElement.form );
editAvatar(editAvatarElement, profileElement);

// Init load
Promise.all([getUser(), getCards()]).then(([user, cards]) => {
  renderUser(user, profileElement);
  renderCards(cards);
});

// get values from form, put this values to object, then transfer that object to the next fn
// function addImage(form, object, template, space, modal) {
function addImage(form, object) {
  form.addEventListener("submit", (element) => {
    object["name"] = form.title.value;
    object["link"] = form.link.value;

    postCard(object)
      .then(() => console.log("create card", object))
      .then(() => getCards().then((cards) => renderCards(cards)));

    // addCard(object, template, space, modal);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

// determine template elements and put values from object to requared places
function addCard(item, template, space, modal) {
  const card = createCard(item, template);
  toggleLikeButton(card.querySelector(".element__like-button"));
  removeCardButton(card.querySelector(".element__remove-button"));
  openPreview(card.querySelector(".element__image"), modal);

  space.prepend(card);
}

// initialCards.forEach((el) => {
//   addCard(el, templateCard, templateSpace, popupPreview);
// });

// open modals
openFormWithReset(imageAddButton, imageAddPopup, imageAddForm);
openFormWithValues(
  profileEditButton,
  profileEditPopup,
  profileEditForm,
  profileElement
);
// close modals
stopProp(modalWindows);
// closeOnEscape(popups);
closeModalWindow(closePopupElements, popups);

// submit for edit
editProfile(profileEditForm, profileElement);

// submit for add
addImage(
  popupAddImageForm,
  templateObject,
  templateCard,
  templateSpace,
  popupPreview
);

//
enableValidation({
  formSelector: ".popup__container", // form
  inputSelector: ".popup__input", // input
  submitButtonSelector: ".popup__submit-button", // button
  inactiveButtonClass: "popup__submit-button_disabled", // button-disabled
  inputErrorClass: "popup__input_type_error", // input error

  errorClass: "popup__field-error", // error-span-shown
});
