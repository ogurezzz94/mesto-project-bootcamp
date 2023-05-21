export function createCard({ data, template, onDelete, onLike }) {
  const templateElement = template.firstElementChild.cloneNode(true);
  const templateImage = templateElement.querySelector(".element__image");
  const templateTitle = templateElement.querySelector(".element__title");
  const likeButton = templateElement.querySelector(".element__like-button");
  const removeButton = templateElement.querySelector(".element__remove-button");

  templateImage.src = data.link;
  templateImage.alt = data.name;
  templateTitle.textContent = data.name;

  likeButton.addEventListener("click", (event) => {
    onLike({ event, button: likeButton, cardElement: templateElement, data });
  });

  const userId = localStorage.getItem("UserId");
  if (!userId) console.error("User ID is empty!");

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
