import { openPopup } from "./open-modal";

export function openPreview(item, modal) {
  item.addEventListener("click", () => {
    const image = modal.querySelector(".popup__image");
    const source = modal.querySelector(".popup__image-description");
    image.src = item.src;
    image.alt = item.alt;
    source.textContent = item.alt;
    openPopup(modal);
  });
}
