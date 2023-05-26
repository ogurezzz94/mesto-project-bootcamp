import { deleteCard, putLike, removeLike } from "./api";

export function removeCard(data, userId, button, element) {
  if (userId === data.owner._id) {
    button.addEventListener("click", () => {
      deleteCard(data._id)
        .then(() => element.remove())
        .catch((err) => console.log("ошибка удлаления карточки", err));
    });
  } else {
    button.remove();
  }
}

export function renderLike(data, userId, button, counter) {
  const likeEnabled = "element__like-button_enabled";
  counter.textContent = data.likes.length;
  const isLiked = data.likes.find(({ _id }) => userId === _id);
  if (isLiked) {
    button.classList.add(likeEnabled);
  }
  button.addEventListener("click", () => {
    if (!button.classList.contains(likeEnabled)) {
      putLike(data._id)
        .then((res) => {
          button.classList.add(likeEnabled);
          counter.textContent = res.likes.length;
        })
        .catch((err) => console.log("ошибка добавления лайка", err));
    } else {
      removeLike(data._id)
        .then((res) => {
          button.classList.remove(likeEnabled);
          counter.textContent = res.likes.length;
        })
        .catch((err) => console.log("ошибка удаления лайка", err));
    }
  });
}
