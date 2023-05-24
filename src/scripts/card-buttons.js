import { deleteCard, putLike, removeLike } from "./api";

export function removeCard(data, userId, button, element) {
  if (userId === data.owner._id) {
    button.addEventListener("click", () => {
      deleteCard(data._id).then(() => element.remove());
      // element.remove();
    });
  } else {
    button.remove();
  }
}

export function renderLike(data, userId, button, counter) {
  counter.textContent = data.likes.length;
  const isLiked = data.likes.find(({ _id }) => userId === _id);
  if (isLiked) {
    button.classList.add("element__like-button_enabled");
  }
  button.addEventListener("click", () => {
    if (!button.classList.contains("element__like-button_enabled")) {
      button.classList.add("element__like-button_enabled");
      counter.textContent = parseInt(counter.textContent) + 1;
      putLike(data._id);
    } else {
      button.classList.remove("element__like-button_enabled");
      counter.textContent = parseInt(counter.textContent) - 1;
      removeLike(data._id);
    }
  });
}
