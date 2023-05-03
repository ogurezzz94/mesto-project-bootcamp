const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_action_edit-profile");
const profileEditForm = document.forms["edit-profile"];

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const imageAddButton = document.querySelector(".profile__add-button");
const imageAddPopup = document.querySelector(".popup_action_add-image");
const imageAddForm = document.forms["add-image"];



const modalWindows = document.querySelectorAll(
  ".popup__container, .popup__figure"
);
function stopProp(array) {
  array.forEach((element) => {
    element.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}
stopProp(modalWindows);



function openPopup(element) {
  element.classList.add("popup_opened");
}

function openPopupByButton(button, window) {
  button.addEventListener("click", () => {
    openPopup(window);
  });
}

function resetForm(form) {
  form.reset();
}

function openFormWithReset(button, window, form) {
  openPopupByButton(button, window);
  resetForm(form);
}

function setInitialValues(form) {
  form.name.value = profileName.textContent;
  form.description.value = profileDescription.textContent;
}

function openFormWithResetAndPlaceholder(button, window, form) {
  openFormWithReset(button, window, form);
  setInitialValues(form);
}

openFormWithReset(imageAddButton, imageAddPopup, imageAddForm);
openFormWithResetAndPlaceholder(
  profileEditButton,
  profileEditPopup,
  profileEditForm
);

// close popup
function closePopup(element) {
  element.classList.remove("popup_opened");
}

