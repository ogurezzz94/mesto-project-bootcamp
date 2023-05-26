import { openPopup } from "./modal-open-close";
const modal = document.querySelector(".popup_action_preview");
const image = modal.querySelector(".popup__image");
const source = modal.querySelector(".popup__image-description");

export function openPreview(item) {
  item.addEventListener("click", () => {
    image.src = item.src;
    image.alt = item.alt;
    source.textContent = item.alt;
    openPopup(modal);
  });
}
