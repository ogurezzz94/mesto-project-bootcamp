import { openPreview } from "./preview-popup";
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

export { addImage, createCard };
