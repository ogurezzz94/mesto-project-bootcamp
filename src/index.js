import {
  closeModalWindow,
  closeOnEscape,
  closeOnEscape,
  stopProp,
} from "./close-modal";

import { editProfile } from "./edit-popup";
import { addImage } from "./add-image";
import { openFormWithReset, openFormWithValues } from "./open-modal";
import { enableValidation } from "./validation";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_action_edit-profile");
const profileEditForm = document.forms["edit-profile"];

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const imageAddButton = document.querySelector(".profile__add-button");
const imageAddPopup = document.querySelector(".popup_action_add-image");
const imageAddForm = document.forms["add-image"];

// open
// const openEditPopupButton = document.querySelector(".profile__edit-button");
// const openAddPopupButton = document.querySelector(".profile__add-button");

const popups = document.querySelectorAll(".popup");

// close
const closePopupElements = document.querySelectorAll(
  ".popup, .popup__close-button"
);

// stop prop
const modalWindows = document.querySelectorAll(
  ".popup__container, .popup__figure"
);

// preview
const popupPreview = document.querySelector(".popup_action_preview");
const popupImage = popupPreview.querySelector(".popup__image");
const popupImageDescription = popupPreview.querySelector(
  ".popup__image-description"
);

// open modals
// const popupEditProfileForm = document.forms["edit-profile"];
// const profileName = document.querySelector(".profile__name");
// const profileDescription = document.querySelector(".profile__description");

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

// modal window

// close

//  stop prop

// edit popup

// prewview

// calls

// render initial

closeOnEscape(popups);
objectCards.forEach(addCard);

// close modals
closeModalWindow(closePopupElements);

// stop ptop
stopProp(modalWindows);

// submit for edit
editProfile(profileEditForm);

// submit for add
addImage(popupAddImageForm, templateObject);

//
openFormWithReset(imageAddButton, imageAddPopup, imageAddForm);
openFormWithValues(profileEditButton, profileEditPopup, profileEditForm);
//
// enableValidation({
//   formSelector: ".popup__container", // form
//   inputSelector: ".popup__input", // input
//   submitButtonSelector: ".popup__submit-button", // button
//   inactiveButtonClass: "popup__submit-button_disabled", // button-disabled
//   inputErrorClass: "popup__input_type_error", // input error

//   errorClass: "popup__field-error", // error-span-shown
// });
