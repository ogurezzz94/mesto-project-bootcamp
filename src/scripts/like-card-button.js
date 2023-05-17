// like btns

function toggleLikeButton(item) {
  item.addEventListener("click", () => {
    item.classList.toggle("element__like-button_enabled");
  });
}

export { toggleLikeButton };
