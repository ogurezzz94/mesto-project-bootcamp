import { openPreview } from "./preview-popup";
import { closePopup } from "./close-modal";
// add image

// get values from form, put this values to object, then transfer that object to the next fn
function addImage(form, object, template, space, modal) {
  form.addEventListener("submit", (element) => {
    object["title"] = form.title.value;
    object["link"] = form.link.value;

    addCard(object, template, space, modal);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}

function createCard(object, template) {
  const templateElement = template.querySelector(".element").cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  templateImage.src = object["link"];
  templateImage.alt = object["title"];
  const templateTitle = templateElement.querySelector(".element__title");
  templateTitle.textContent = object["title"];

  return templateElement;
}

// determine template elements and put values from object to requared places
function addCard(object, template, space, modal) {
  const card = createCard(object, template);
  toggleLikeButton(card.querySelector(".element__like-button"));
  removeCard(card.querySelector(".element__remove-button"));
  openPreview(card.querySelector(".element__image"), modal);

  space.prepend(card);
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

export { addImage, addCard };
