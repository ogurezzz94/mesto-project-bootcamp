import "./pages/index.css";

import {getApi} from "./scripts/api";

import {
  closeModalWindow,
  stopProp,
  closePopup
} from "./scripts/close-modal";

import { editProfile } from "./scripts/edit-popup";
import { createCard } from "./scripts/add-image";
import { openFormWithReset, openFormWithValues } from "./scripts/open-modal";
import { enableValidation } from "./scripts/validation";

import { openPreview } from "./scripts/preview-popup";
import { toggleLikeButton } from "./scripts/like-card-button";
import { removeCardButton } from "./scripts/remove-card-button";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_action_edit-profile");
const profileEditForm = document.forms["edit-profile"];

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const imageAddButton = document.querySelector(".profile__add-button");
const imageAddPopup = document.querySelector(".popup_action_add-image");
const imageAddForm = document.forms["add-image"];

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

const configCards = {
  baseUrl: "https://nomoreparties.co/v1/wbf-cohort-8/cards",
  headers: {
    authorization: "31a2d760-4fa3-4c8c-9e34-6dea3045973e",
    "Content-Type": "application/json",
  },
};

getApi(configCards,getInitialCards);

function getInitialCards (item) {item.forEach((el) => {
  addCard(el, templateCard, templateSpace, popupPreview);
});
}

// get values from form, put this values to object, then transfer that object to the next fn
function addImage(form, object, template, space, modal) {
  form.addEventListener("submit", (element) => {
    object["name"] = form.title.value;
    object["link"] = form.link.value;

    addCard(object, template, space, modal);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

// determine template elements and put values from object to requared places
function addCard(object, template, space, modal) {
  const card = createCard(object, template);
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
  profileName,
  profileDescription
);
// close modals
stopProp(modalWindows);
// closeOnEscape(popups);
closeModalWindow(closePopupElements, popups);

// submit for edit
editProfile(profileEditForm, profileName, profileDescription);

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
