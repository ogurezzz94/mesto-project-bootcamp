//!  █████╗  █████╗ ███╗  ██╗ ██████╗████████╗ █████╗ ███╗  ██╗████████╗ ██████╗
//! ██╔══██╗██╔══██╗████╗ ██║██╔════╝╚══██╔══╝██╔══██╗████╗ ██║╚══██╔══╝██╔════╝
//! ██║  ╚═╝██║  ██║██╔██╗██║╚█████╗    ██║   ███████║██╔██╗██║   ██║   ╚█████╗
//! ██║  ██╗██║  ██║██║╚████║ ╚═══██╗   ██║   ██╔══██║██║╚████║   ██║    ╚═══██╗
//! ╚█████╔╝╚█████╔╝██║ ╚███║██████╔╝   ██║   ██║  ██║██║ ╚███║   ██║   ██████╔╝
//!  ╚════╝  ╚════╝ ╚═╝  ╚══╝╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝   ╚═╝   ╚═════╝

// likes removes
// const likeButtons = document.querySelectorAll(".element__like-button");
const removeButtons = document.querySelectorAll(".element__remove-button");
// delete card
// const removeCardButton = document.querySelector(".element__remove-button");

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

// определение коллекции, каждый элемент которой должен получить необходимый датасет
// const openPreviewButtons = document.querySelectorAll(".element__picture");

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

function closeOnElement() {
  popups.forEach((element) => {
    element.classList.remove("popup_opened");
    checkForForm(element);
  });
}

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

function placeholderInitialValue(form) {
  const name = profileName.textContent;
  const description = profileDescription.textContent;
  form.name.placeholder = name;
  form.description.placeholder = description;
}

function editProfile(form) {
  form.addEventListener("submit", (element) => {
    element.preventDefault();
    const name = form.name.value;
    const description = form.description.value;
    form.name.placeholder = name;
    form.description.placeholder = description;
    profileName.textContent = name;
    profileDescription.textContent = description;
    form.offsetParent.classList.remove("popup_opened");
    form.reset();
  });
}

//*  █████╗ ██████╗ ██████╗   ██╗███╗   ███╗ █████╗  ██████╗ ███████╗
//* ██╔══██╗██╔══██╗██╔══██╗  ██║████╗ ████║██╔══██╗██╔════╝ ██╔════╝
//* ███████║██║  ██║██║  ██║  ██║██╔████╔██║███████║██║  ██╗ █████╗
//* ██╔══██║██║  ██║██║  ██║  ██║██║╚██╔╝██║██╔══██║██║  ╚██╗██╔══╝
//* ██║  ██║██████╔╝██████╔╝  ██║██║ ╚═╝ ██║██║  ██║╚██████╔╝███████╗
//* ╚═╝  ╚═╝╚═════╝ ╚═════╝   ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝

function addImage(form, object) {
  form.addEventListener("submit", (element) => {
    element.preventDefault();
    object["title"] = form.title.value;
    object["link"] = form.link.value;
    form.offsetParent.classList.remove("popup_opened");
    addCard(object);
    form.reset();
  });
}

function addCard(object) {
  const templateElement = templateCard
    .querySelector(".element")
    .cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  const templateTitle = templateElement.querySelector(".element__title");
  const templateLike = templateElement.querySelector(".element__like-button");
  const templateRemove = templateElement.querySelector(
    ".element__remove-button"
  );

  templateImage.src = object["link"];
  templateImage.alt = object["title"];
  templateTitle.textContent = object["title"];
  templateSpace.prepend(templateElement);
  toggleLikeButton(templateLike);
  removeCard(templateRemove);
  console.log(object);
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
