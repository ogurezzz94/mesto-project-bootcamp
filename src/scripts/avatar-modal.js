import { closePopup } from "./close-modal";
import { patchAvatar } from "./api";

export function editAvatar({ form }, { avatar }) {
  form.addEventListener("submit", (element) => {
    const image = form.avatar.value;

    avatar.src = image;

    patchAvatar(image);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}
