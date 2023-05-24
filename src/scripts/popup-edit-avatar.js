import { closeElement } from "./modal-open-close";
import { patchAvatar } from "./api";

export function editAvatar({ form }, { avatar }) {
  form.addEventListener("submit", (element) => {
    const image = form.avatar.value;

    avatar.src = image;

    patchAvatar(image);
    closeElement(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}
