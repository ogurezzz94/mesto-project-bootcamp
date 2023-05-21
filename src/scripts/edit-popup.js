import { closePopup } from "./close-modal";
import { patchProfile } from "./api";

export function editProfile(form, profile) {
  form.addEventListener("submit", (element) => {
    const name = form.name.value;
    const description = form.description.value;

    profile.name.textContent = name;
    profile.description.textContent = description;

    patchProfile({ name, description });
    closePopup(form.offsetParent);
    element.preventDefault();
    form.reset();
  });
}