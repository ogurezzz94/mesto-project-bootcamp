console.log("webpack build");
import "../pages/index.css";

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

// open

function openPopup(element) {
  element.classList.add("popup_opened");
}

function openPopupByButton(button, element) {
  button.addEventListener("click", () => {
    openPopup(element);
  });
}

function resetFormByButton(button, form) {
  button.addEventListener("click", () => {
    form.reset();
  });
}

function openFormWithReset(button, element, form) {
  resetFormByButton(button, form);
  openPopupByButton(button, element);
}
openFormWithReset(imageAddButton, imageAddPopup, imageAddForm);

function setInitialValues(button, form) {
  button.addEventListener("click", () => {
    form.name.value = profileName.textContent;
    form.description.value = profileDescription.textContent;
  });
}

function openFormWithValues(button, element, form) {
  openFormWithReset(button, element, form);
  setInitialValues(button, form);
}
openFormWithValues(profileEditButton, profileEditPopup, profileEditForm);

// close

function closePopup(element) {
  element.classList.remove("popup_opened");
}

function closeModalWindow(array) {
  array.forEach((button) => {
    button.addEventListener("click", () => closeOnElement());
  });
}

// for each element remove class
function closeOnElement() {
  popups.forEach((element) => {
    closePopup(element);
  });
}

function closeOnEscape(item) {
  document.body.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      item.forEach((element) => {
        closePopup(element);
      });
    }
  });
}
closeOnEscape(popups);

//  stop prop

function stopProp(array) {
  array.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}

// edit popup

function editProfile(form) {
  form.addEventListener("submit", (element) => {
    profileName.textContent = form.name.value;
    profileDescription.textContent = form.description.value;
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

// add image

// get values from form, put this values to object, then transfer that object to the next fn
function addImage(form, object) {
  form.addEventListener("submit", (element) => {
    object["title"] = form.title.value;
    object["link"] = form.link.value;

    addCard(object);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

function createCard(object) {
  const templateElement = templateCard
    .querySelector(".element")
    .cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  templateImage.src = object["link"];
  templateImage.alt = object["title"];
  const templateTitle = templateElement.querySelector(".element__title");
  templateTitle.textContent = object["title"];

  return templateElement;
}

// determine template elements and put values from object to requared places
function addCard(object) {
  const card = createCard(object);
  toggleLikeButton(card.querySelector(".element__like-button"));
  removeCard(card.querySelector(".element__remove-button"));
  openPreview(card.querySelector(".element__image"));

  templateSpace.prepend(card);
}

// like btns

function toggleLikeButton(item) {
  item.addEventListener("click", () => {
    item.classList.toggle("element__like-button_enabled");
  });
}

// remove card

function removeCard(button) {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
}

// prewview

function openPreview(item) {
  item.addEventListener("click", () => {
    popupImage.src = item.src;
    popupImage.alt = item.alt;
    popupImageDescription.textContent = item.alt;
    openPopup(popupPreview);
  });
}

// calls

// render initial
objectCards.forEach(addCard);

// close modals
closeModalWindow(closePopupElements);

// stop ptop
stopProp(modalWindows);

// submit for edit
editProfile(profileEditForm);

// submit for add
addImage(popupAddImageForm, templateObject);
