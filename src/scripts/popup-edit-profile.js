import { closeElement } from "./modal-open-close";
import { patchProfile } from "./api";

export function editProfile(form, profile) {
  form.addEventListener("submit", (event) => {
    const name = form.name.value;
    const description = form.description.value;

    profile.name.textContent = name;
    profile.description.textContent = description;

    patchProfile({ name, description });
    closeElement(form.offsetParent);
    event.preventDefault();
    form.reset();
  });
}
