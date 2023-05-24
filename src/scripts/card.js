import { renderLike, removeCard } from "./card-buttons";
import { openPreview } from "./popup-open-preview";

export function createCard({ data, template }) {
  const userId = localStorage.getItem("UserId");
  if (!userId) console.error("User ID is empty!");
  const templateElement = template.firstElementChild.cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  const templateTitle = templateElement.querySelector(".element__title");
  const likeButton = templateElement.querySelector(".element__like-button");
  const likeCounter = templateElement.querySelector(".element__like-counter");
  const removeButton = templateElement.querySelector(".element__remove-button");

  templateImage.src = data.link;
  templateImage.alt = data.name;
  templateTitle.textContent = data.name;

  openPreview(templateImage);
  renderLike(data, userId, likeButton, likeCounter);
  removeCard(data, userId, removeButton, templateElement);

  return templateElement;
}
