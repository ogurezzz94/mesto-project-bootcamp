import "../pages/index.css";

import {
  closeModalWindow,
  closeOnEscape,
  stopProp,
} from "../scripts/close-modal";

import { editProfile } from "../scripts/edit-popup";
import { addImage, addCard } from "../scripts/add-image";
import { openFormWithReset, openFormWithValues } from "../scripts/open-modal";
import { enableValidation } from "../scripts/validation";

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

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const objectCards = initialCards.map(function (item) {
  return {
    title: item.name,
    link: item.link,
  };
});

objectCards.forEach((el) => {
  addCard(el, templateCard, templateSpace, popupPreview);
});

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
closeOnEscape(popups);
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
