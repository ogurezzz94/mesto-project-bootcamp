import { deleteCard, getCards, putLike, removeLike } from "./api";
import { openPreview } from "./preview-popup";

export function createCard({ data, template, onDelete, onLike }) {
  const userId = localStorage.getItem("UserId");
  if (!userId) console.error("User ID is empty!");
  const templateElement = template.firstElementChild.cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  const templateTitle = templateElement.querySelector(".element__title");
  const likeButton = templateElement.querySelector(".element__like-button");
  const likeCounter = templateElement.querySelector(".element__like-counter");
  const removeButton = templateElement.querySelector(".element__remove-button");

  // profile data
  templateImage.src = data.link;
  templateImage.alt = data.name;
  templateTitle.textContent = data.name;

  openPreview(templateImage);
  // likes
  likeCounter.textContent = data.likes.length;
  const isLiked = data.likes.find(({ _id }) => userId === _id);
  if (isLiked) {
    likeButton.classList.add("element__like-button_enabled");
  }
  likeButton.addEventListener("click", () => {
    if (!likeButton.classList.contains("element__like-button_enabled")) {
      likeButton.classList.add("element__like-button_enabled");
      likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
      putLike(data._id);
    } else {
      likeButton.classList.remove("element__like-button_enabled");
      likeCounter.textContent = parseInt(likeCounter.textContent) - 1;
      removeLike(data._id);
    }

    // onLike({ event, button: likeButton, cardElement: templateElement, data });
  });
  // remove button
  if (userId === data.owner._id) {
    removeButton.addEventListener("click", (event) => {
      onDelete({
        event,
        button: removeButton,
        cardElement: templateElement,
        data,
      });
    });
  } else {
    removeButton.remove();
  }

  return templateElement;
}

export function renderUser(user, profile) {
  profile.avatar.src = user.avatar;
  profile.name.textContent = user.name;
  profile.description.textContent = user.about;

  localStorage.setItem("UserId", user._id);
}

export function renderCards(cards) {
  const templateCard = document.querySelector(".template-element").content;
  const templateSpace = document.querySelector(".elements");
  templateSpace.innerHTML = "";

  for (const card of cards) {
    templateSpace.append(
      createCard({
        data: card,
        template: templateCard,
        onDelete: ({ data }) => {
          deleteCard(data._id).then(() =>
            getCards().then((cards) => renderCards(cards))
          );
        },
        onLike: ({ data }) => {
          toggleLike(card).then(() => {
            console.log(cardElement);
          });
        },
      })
    );
  }
}
