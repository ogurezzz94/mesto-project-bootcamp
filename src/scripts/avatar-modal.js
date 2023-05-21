import { closePopup } from "./close-modal";
import { patchAvatar } from "./api";

export function editAvatar(form, profile) {
  form.addEventListener("submit", (element) => {
    const avatar = form.avatar.value;

    profile.avatar.src = avatar;

    patchAvatar(avatar);
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}
