//!  █████╗  █████╗ ███╗  ██╗ ██████╗████████╗ █████╗ ███╗  ██╗████████╗ ██████╗
//! ██╔══██╗██╔══██╗████╗ ██║██╔════╝╚══██╔══╝██╔══██╗████╗ ██║╚══██╔══╝██╔════╝
//! ██║  ╚═╝██║  ██║██╔██╗██║╚█████╗    ██║   ███████║██╔██╗██║   ██║   ╚█████╗
//! ██║  ██╗██║  ██║██║╚████║ ╚═══██╗   ██║   ██╔══██║██║╚████║   ██║    ╚═══██╗
//! ╚█████╔╝╚█████╔╝██║ ╚███║██████╔╝   ██║   ██║  ██║██║ ╚███║   ██║   ██████╔╝
//!  ╚════╝  ╚════╝ ╚═╝  ╚══╝╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝   ╚═╝   ╚═════╝

// open
const openEditPopupButton = document.querySelector(".profile__edit-button");
const openAddPopupButton = document.querySelector(".profile__add-button");
const popups = document.querySelectorAll(".popup");

// close
const closePopupElements = document.querySelectorAll(
  ".popup, .popup__close-button"
);

// stop prop
const modalWindow = document.querySelectorAll(
  ".popup__container, .popup__preview"
);

// open modals
const popupEditProfileForm = document.forms["edit-profile"];
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

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

//* ██╗     ██╗██╗  ██╗███████╗  ██████╗ ██╗   ██╗████████╗████████╗ █████╗ ███╗  ██╗ ██████╗
//* ██║     ██║██║ ██╔╝██╔════╝  ██╔══██╗██║   ██║╚══██╔══╝╚══██╔══╝██╔══██╗████╗ ██║██╔════╝
//* ██║     ██║█████═╝ █████╗    ██████╦╝██║   ██║   ██║      ██║   ██║  ██║██╔██╗██║╚█████╗
//* ██║     ██║██╔═██╗ ██╔══╝    ██╔══██╗██║   ██║   ██║      ██║   ██║  ██║██║╚████║ ╚═══██╗
//* ███████╗██║██║ ╚██╗███████╗  ██████╦╝╚██████╔╝   ██║      ██║   ╚█████╔╝██║ ╚███║██████╔╝
//* ╚══════╝╚═╝╚═╝  ╚═╝╚══════╝  ╚═════╝  ╚═════╝    ╚═╝      ╚═╝    ╚════╝ ╚═╝  ╚══╝╚═════╝

function toggleLikeButton(item) {
  item.addEventListener("click", () => {
    item.classList.toggle("element__like-button_enabled");
  });
}

//! ███╗   ███╗ █████╗ ██████╗  █████╗ ██╗        ██╗       ██╗██╗███╗  ██╗██████╗  █████╗  ██╗       ██╗ ██████╗
//! ████╗ ████║██╔══██╗██╔══██╗██╔══██╗██║        ██║  ██╗  ██║██║████╗ ██║██╔══██╗██╔══██╗ ██║  ██╗  ██║██╔════╝
//! ██╔████╔██║██║  ██║██║  ██║███████║██║        ╚██╗████╗██╔╝██║██╔██╗██║██║  ██║██║  ██║ ╚██╗████╗██╔╝╚█████╗
//! ██║╚██╔╝██║██║  ██║██║  ██║██╔══██║██║         ████╔═████║ ██║██║╚████║██║  ██║██║  ██║  ████╔═████║  ╚═══██╗
//! ██║ ╚═╝ ██║╚█████╔╝██████╔╝██║  ██║███████╗    ╚██╔╝ ╚██╔╝ ██║██║ ╚███║██████╔╝╚█████╔╝  ╚██╔╝ ╚██╔╝ ██████╔╝
//! ╚═╝     ╚═╝ ╚════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝  ╚════╝    ╚═╝   ╚═╝  ╚═════╝

//*  █████╗ ██████╗ ███████╗███╗  ██╗
//* ██╔══██╗██╔══██╗██╔════╝████╗ ██║
//* ██║  ██║██████╔╝█████╗  ██╔██╗██║
//* ██║  ██║██╔═══╝ ██╔══╝  ██║╚████║
//* ╚█████╔╝██║     ███████╗██║ ╚███║
//*  ╚════╝ ╚═╝     ╚══════╝╚═╝  ╚══╝

function openModalWithButton(button) {
  const modalWindow = document.querySelector(button.dataset.open);
  button.addEventListener("click", () => {
    placeholderInitialValue(popupEditProfileForm);
    modalWindow.classList.add("popup_opened");
  });
}

//*  █████╗ ██╗      █████╗  ██████╗███████╗
//* ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
//* ██║  ╚═╝██║     ██║  ██║╚█████╗ █████╗
//* ██║  ██╗██║     ██║  ██║ ╚═══██╗██╔══╝
//* ╚█████╔╝███████╗╚█████╔╝██████╔╝███████╗
//*  ╚════╝ ╚══════╝ ╚════╝ ╚═════╝ ╚══════╝

function closeModalWindow(array) {
  array.forEach((button) => {
    button.addEventListener("click", () => closeOnElement());
  });
}

// for each element remove class
function closeOnElement() {
  popups.forEach((element) => {
    element.classList.remove("popup_opened");
    checkForForm(element);
  });
}

// chek for form, if its form than reset it
function checkForForm(element) {
  const childOfModal = element.firstElementChild;
  if (childOfModal.nodeName === "FORM") {
    childOfModal.reset();
  }
}

//*  ██████╗████████╗ █████╗ ██████╗   ██████╗ ██████╗  █████╗ ██████╗
//* ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
//* ╚█████╗    ██║   ██║  ██║██████╔╝  ██████╔╝██████╔╝██║  ██║██████╔╝
//*  ╚═══██╗   ██║   ██║  ██║██╔═══╝   ██╔═══╝ ██╔══██╗██║  ██║██╔═══╝
//* ██████╔╝   ██║   ╚█████╔╝██║       ██║     ██║  ██║╚█████╔╝██║
//* ╚═════╝    ╚═╝    ╚════╝ ╚═╝       ╚═╝     ╚═╝  ╚═╝ ╚════╝ ╚═╝

function stopProp(array) {
  array.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}

//* ███████╗██████╗ ██╗████████╗  ██████╗  █████╗ ██████╗ ██╗   ██╗██████╗
//* ██╔════╝██╔══██╗██║╚══██╔══╝  ██╔══██╗██╔══██╗██╔══██╗██║   ██║██╔══██╗
//* █████╗  ██║  ██║██║   ██║     ██████╔╝██║  ██║██████╔╝██║   ██║██████╔╝
//* ██╔══╝  ██║  ██║██║   ██║     ██╔═══╝ ██║  ██║██╔═══╝ ██║   ██║██╔═══╝
//* ███████╗██████╔╝██║   ██║     ██║     ╚█████╔╝██║     ╚██████╔╝██║
//* ╚══════╝╚═════╝ ╚═╝   ╚═╝     ╚═╝      ╚════╝ ╚═╝      ╚═════╝ ╚═╝

// get values for the holder
function placeholderInitialValue(form) {
  form.name.placeholder = profileName.textContent; // it might be form.name.value but i dont want it that way
  form.description.placeholder = profileDescription.textContent; // same here
}

function editProfile(form) {
  form.addEventListener("submit", (element) => {
    form.name.placeholder, profileName.textContent = form.name.value;
    form.description.placeholder, profileDescription.textContent = form.description.value;

    form.offsetParent.classList.remove("popup_opened");
    element.preventDefault();
    form.reset();
  });
}

//*  █████╗ ██████╗ ██████╗   ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
//* ██╔══██╗██╔══██╗██╔══██╗  ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
//* ███████║██║  ██║██║  ██║  ██║██╔████╔██║███████║██║  ██╗ █████╗
//* ██╔══██║██║  ██║██║  ██║  ██║██║╚██╔╝██║██╔══██║██║  ╚██╗██╔══╝
//* ██║  ██║██████╔╝██████╔╝  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
//* ╚═╝  ╚═╝╚═════╝ ╚═════╝   ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

// get values from form, put this values to object, then transfer that object to the next fn
function addImage(form, object) {
  form.addEventListener("submit", (element) => {
    object["title"] = form.title.value;
    object["link"] = form.link.value;

    addCard(object);
    form.offsetParent.classList.remove("popup_opened");
    element.preventDefault();
    form.reset();
  });
}

// determine template elements and put values from object to requared places
function addCard(object) {
  const templateElement = templateCard
    .querySelector(".element")
    .cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  const templateTitle = templateElement.querySelector(".element__title");
  const templateLike = templateElement.querySelector(".element__like-button");
  const templateRemove = templateElement.querySelector(".element__remove-button");

  templateImage.src = object["link"];
  templateImage.alt = object["title"];
  templateTitle.textContent = object["title"];

  templateSpace.prepend(templateElement);
  toggleLikeButton(templateLike);
  removeCard(templateRemove);
  openPreview(templateImage);
}

//* ██████╗ ███████╗███╗   ███╗ █████╗ ██╗   ██╗███████╗
//* ██╔══██╗██╔════╝████╗ ████║██╔══██╗██║   ██║██╔════╝
//* ██████╔╝█████╗  ██╔████╔██║██║  ██║╚██╗ ██╔╝█████╗
//* ██╔══██╗██╔══╝  ██║╚██╔╝██║██║  ██║ ╚████╔╝ ██╔══╝
//* ██║  ██║███████╗██║ ╚═╝ ██║╚█████╔╝  ╚██╔╝  ███████╗
//* ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚════╝    ╚═╝   ╚══════╝

function removeCard(button) {
  button.addEventListener("click", () => {
    button.parentElement.remove();
  });
}

const popupPreview = document.querySelector()

function openPreview (button) {
  button.addEventListener("click" ,() => {
    console.dir()
    .classList.add("popup_opened");
  })
}

//!  █████╗  █████╗ ██╗     ██╗      ██████╗
//! ██╔══██╗██╔══██╗██║     ██║     ██╔════╝
//! ██║  ╚═╝███████║██║     ██║     ╚█████╗
//! ██║  ██╗██╔══██║██║     ██║      ╚═══██╗
//! ╚█████╔╝██║  ██║███████╗███████╗██████╔╝
//!  ╚════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝

// render initial
objectCards.forEach(addCard);

// open forms
openModalWithButton(openEditPopupButton);
openModalWithButton(openAddPopupButton);

// close modals
closeModalWindow(closePopupElements);

// stop ptop
stopProp(modalWindow);

// submit for edit
editProfile(popupEditProfileForm);

// submit for add
addImage(popupAddImageForm, templateObject);
